const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const DATA_DIR = path.join(process.cwd(), "data");
const ADMIN_FILE = path.join(DATA_DIR, "admin.json");

const DEFAULT_ADMIN = {
  id: "admin-root",
  name: "Shreejee Nexus Admin",
  email: "admin@shreejeenexus.com",
  defaultPassword: "Admin@Nexus2026!",
};

async function seed() {
  console.log("🌱 [Seed] Initializing Admin Seed...");

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(DEFAULT_ADMIN.defaultPassword, salt);

  // 1. Try seeding into MongoDB if MONGODB_URI is provided
  const mongoUri = process.env.MONGODB_URI;
  if (mongoUri) {
    try {
      console.log("🍃 [Seed] Connecting to MongoDB via Mongoose...");
      await mongoose.connect(mongoUri);

      const AdminSchema = new mongoose.Schema(
        {
          email: { type: String, required: true, unique: true, lowercase: true },
          name: { type: String, required: true },
          passwordHash: { type: String, required: true },
        },
        { timestamps: true }
      );

      const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

      await Admin.findOneAndUpdate(
        { email: DEFAULT_ADMIN.email.toLowerCase() },
        {
          email: DEFAULT_ADMIN.email.toLowerCase(),
          name: DEFAULT_ADMIN.name,
          passwordHash,
          updatedAt: new Date(),
        },
        { upsert: true, new: true }
      );

      console.log("✅ [Seed] Successfully seeded Admin in MongoDB database!");
      await mongoose.disconnect();
    } catch (mongoErr) {
      console.warn("⚠️ [Seed] Could not connect to MongoDB:", mongoErr.message);
      console.warn("Falling back to local file seed...");
    }
  }

  // 2. Also ensure local fallback seed exists
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const adminData = {
    id: DEFAULT_ADMIN.id,
    email: DEFAULT_ADMIN.email,
    name: DEFAULT_ADMIN.name,
    passwordHash,
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync(ADMIN_FILE, JSON.stringify(adminData, null, 2), "utf-8");

  console.log("✅ [Seed] Admin account successfully seeded!");
  console.log("--------------------------------------------------");
  console.log(`👤 Email:    ${DEFAULT_ADMIN.email}`);
  console.log(`🔑 Password: ${DEFAULT_ADMIN.defaultPassword}`);
  console.log(`🌐 Login at: /admin/login`);
  console.log("--------------------------------------------------");
}

seed().catch((err) => {
  console.error("❌ [Seed] Error seeding admin:", err);
  process.exit(1);
});
