import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Needed because __dirname is not available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Global error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err?.stack || err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason?.stack || reason);
});

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Database (just importing runs the connection)
import "./config/db.js";

// Routes (ES module imports)
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadroutes.js";
import auditRoutes from "./routes/auditRoutes.js";
import analyzeRoutes from "./routes/analyze.js";
import fixContentRoutes from "./routes/fix-content.js";

// Route usage
app.use("/api/v1", authRoutes);
app.use("/api/v1", uploadRoutes);
app.use("/api/v1", auditRoutes);
app.use("/api/analyze", analyzeRoutes);
app.use("/api/v1", fixContentRoutes);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

