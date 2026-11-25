import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "./mongodb";
import Contact from "@/models/Contact";
import Admin from "@/models/Admin";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  status: "unread" | "read" | "replied";
  createdAt: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  updatedAt: string;
}

// Fallback JSON data directory and file paths
const DATA_DIR = path.join(process.cwd(), "data");
const ADMIN_FILE = path.join(DATA_DIR, "admin.json");
const MESSAGES_FILE = path.join(DATA_DIR, "contacts.json");

// Default initial admin credentials
export const DEFAULT_ADMIN = {
  id: "admin-root",
  name: "Shreejee Nexus Admin",
  email: "admin@shreejeenexus.com",
  defaultPassword: "Admin@Nexus2026!",
};

// Ensure fallback data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Initialize admin account if not exists
export async function ensureAdminSeed(forceReset = false): Promise<AdminUser> {
  const mdb = await connectToDatabase();

  // If MongoDB is connected via Mongoose
  if (mdb) {
    try {
      let admin = await Admin.findOne({ email: DEFAULT_ADMIN.email.toLowerCase() });

      if (admin && !forceReset) {
        return {
          id: admin._id.toString(),
          email: admin.email,
          name: admin.name,
          passwordHash: admin.passwordHash,
          updatedAt: admin.updatedAt ? admin.updatedAt.toISOString() : new Date().toISOString(),
        };
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(DEFAULT_ADMIN.defaultPassword, salt);

      if (admin && forceReset) {
        admin.passwordHash = passwordHash;
        admin.updatedAt = new Date();
        await admin.save();
      } else {
        admin = await Admin.create({
          email: DEFAULT_ADMIN.email.toLowerCase(),
          name: DEFAULT_ADMIN.name,
          passwordHash,
        });
      }

      return {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        passwordHash: admin.passwordHash,
        updatedAt: admin.updatedAt.toISOString(),
      };
    } catch (err) {
      console.error("MongoDB seed error, falling back to local file:", err);
    }
  }

  // Fallback: Local JSON file
  ensureDataDir();

  if (!forceReset && fs.existsSync(ADMIN_FILE)) {
    try {
      const raw = fs.readFileSync(ADMIN_FILE, "utf-8");
      const admin = JSON.parse(raw) as AdminUser;
      if (admin && admin.email && admin.passwordHash) {
        return admin;
      }
    } catch {
      // Re-seed if parsing fails
    }
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(DEFAULT_ADMIN.defaultPassword, salt);

  const defaultAdmin: AdminUser = {
    id: DEFAULT_ADMIN.id,
    email: DEFAULT_ADMIN.email,
    name: DEFAULT_ADMIN.name,
    passwordHash,
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync(ADMIN_FILE, JSON.stringify(defaultAdmin, null, 2), "utf-8");
  return defaultAdmin;
}

// Get admin profile
export async function getAdmin(): Promise<AdminUser> {
  return await ensureAdminSeed(false);
}

// Verify admin login credentials
export async function verifyAdminCredentials(
  email: string,
  plainPassword: string
): Promise<AdminUser | null> {
  const mdb = await connectToDatabase();

  if (mdb) {
    try {
      const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
      if (!admin) {
        return null;
      }

      const isValid = await bcrypt.compare(plainPassword, admin.passwordHash);
      if (!isValid) {
        return null;
      }

      return {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        passwordHash: admin.passwordHash,
        updatedAt: admin.updatedAt ? admin.updatedAt.toISOString() : new Date().toISOString(),
      };
    } catch (err) {
      console.error("MongoDB auth error, falling back to local file:", err);
    }
  }

  // Fallback check
  const admin = await getAdmin();
  if (email.toLowerCase().trim() !== admin.email.toLowerCase().trim()) {
    return null;
  }

  const isValid = await bcrypt.compare(plainPassword, admin.passwordHash);
  if (!isValid) {
    return null;
  }

  return admin;
}

// Update admin password
export async function updateAdminPassword(
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  if (newPassword.length < 8) {
    return { success: false, message: "New password must be at least 8 characters" };
  }

  const mdb = await connectToDatabase();

  if (mdb) {
    try {
      const admin = await Admin.findOne({ email: DEFAULT_ADMIN.email.toLowerCase() });
      if (!admin) {
        return { success: false, message: "Admin account not found" };
      }

      const isCurrentValid = await bcrypt.compare(currentPassword, admin.passwordHash);
      if (!isCurrentValid) {
        return { success: false, message: "Current password does not match" };
      }

      const salt = await bcrypt.genSalt(10);
      const newHash = await bcrypt.hash(newPassword, salt);

      admin.passwordHash = newHash;
      admin.updatedAt = new Date();
      await admin.save();

      return { success: true, message: "Password updated successfully in MongoDB" };
    } catch (err) {
      console.error("MongoDB password update error, attempting fallback:", err);
    }
  }

  // Fallback update
  ensureDataDir();
  const admin = await getAdmin();

  const isCurrentValid = await bcrypt.compare(currentPassword, admin.passwordHash);
  if (!isCurrentValid) {
    return { success: false, message: "Current password does not match" };
  }

  const salt = await bcrypt.genSalt(10);
  const newHash = await bcrypt.hash(newPassword, salt);

  const updatedAdmin: AdminUser = {
    ...admin,
    passwordHash: newHash,
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync(ADMIN_FILE, JSON.stringify(updatedAdmin, null, 2), "utf-8");
  return { success: true, message: "Password updated successfully" };
}

// Get all contact messages
export async function getContactMessages(): Promise<ContactMessage[]> {
  const mdb = await connectToDatabase();

  if (mdb) {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
      return contacts.map((c) => ({
        id: c._id.toString(),
        name: c.name,
        email: c.email,
        phone: c.phone || "",
        company: c.company || "",
        service: c.service,
        message: c.message,
        status: (c.status as "unread" | "read" | "replied") || "unread",
        createdAt: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
      }));
    } catch (err) {
      console.error("MongoDB getContactMessages error, falling back to local file:", err);
    }
  }

  // Fallback: Local JSON file
  ensureDataDir();
  if (!fs.existsSync(MESSAGES_FILE)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(raw) as ContactMessage[];
    return Array.isArray(messages)
      ? messages.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      : [];
  } catch {
    return [];
  }
}

// Save a new contact message
export async function saveContactMessage(
  data: Omit<ContactMessage, "id" | "status" | "createdAt">
): Promise<ContactMessage> {
  const mdb = await connectToDatabase();

  if (mdb) {
    try {
      const newContact = await Contact.create({
        ...data,
        status: "unread",
      });

      return {
        id: newContact._id.toString(),
        name: newContact.name,
        email: newContact.email,
        phone: newContact.phone || "",
        company: newContact.company || "",
        service: newContact.service,
        message: newContact.message,
        status: newContact.status,
        createdAt: newContact.createdAt.toISOString(),
      };
    } catch (err) {
      console.error("MongoDB saveContactMessage error, falling back to local file:", err);
    }
  }

  // Fallback: Local JSON file
  ensureDataDir();
  const messages = await getContactMessages();

  const newMessage: ContactMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...data,
    status: "unread",
    createdAt: new Date().toISOString(),
  };

  messages.unshift(newMessage);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
  return newMessage;
}

// Update message status
export async function updateContactMessageStatus(
  id: string,
  status: "unread" | "read" | "replied"
): Promise<ContactMessage | null> {
  const mdb = await connectToDatabase();

  if (mdb) {
    try {
      const updated = await Contact.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      ).lean();

      if (updated) {
        return {
          id: updated._id.toString(),
          name: updated.name,
          email: updated.email,
          phone: updated.phone || "",
          company: updated.company || "",
          service: updated.service,
          message: updated.message,
          status: updated.status,
          createdAt: updated.createdAt ? new Date(updated.createdAt).toISOString() : new Date().toISOString(),
        };
      }
    } catch (err) {
      console.error("MongoDB update status error, falling back to local file:", err);
    }
  }

  // Fallback: Local JSON file
  ensureDataDir();
  const messages = await getContactMessages();
  const idx = messages.findIndex((m) => m.id === id);

  if (idx === -1) {
    return null;
  }

  messages[idx].status = status;
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
  return messages[idx];
}

// Delete a contact message
export async function deleteContactMessage(id: string): Promise<boolean> {
  const mdb = await connectToDatabase();

  if (mdb) {
    try {
      const res = await Contact.findByIdAndDelete(id);
      if (res) {
        return true;
      }
    } catch (err) {
      console.error("MongoDB delete error, falling back to local file:", err);
    }
  }

  // Fallback: Local JSON file
  ensureDataDir();
  const messages = await getContactMessages();
  const filtered = messages.filter((m) => m.id !== id);

  if (filtered.length === messages.length) {
    return false;
  }

  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
