import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  name: string;
  passwordHash: string;
  updatedAt: Date;
}

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    email: {
      type: String,
      required: [true, "Admin email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: [true, "Admin name is required"],
      default: "Shreejee Nexus Admin",
    },
    passwordHash: {
      type: String,
      required: [true, "Password hash is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in development hot reloading
const Admin: Model<IAdmin> =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;

