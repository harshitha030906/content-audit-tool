import mongoose from "mongoose";

// 🔹 MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Error:", err));

/* =======================
   USER MODEL
======================= */

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

export const User = mongoose.model("User", UserSchema);

export async function createUser(email, hashedPassword) {
  return await User.create({ email, password_hash: hashedPassword });
}

export async function findUserByEmail(email) {
  return await User.findOne({ email });
}

/* =======================
   AUDIT MODEL
======================= */

const AuditSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  contentType: String,
  fileUrl: String,
  result_json: Object,
  created_at: { type: Date, default: Date.now }
});

export const Audit = mongoose.model("Audit", AuditSchema);

