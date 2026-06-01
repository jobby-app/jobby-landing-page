import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { closePool, runMigrations } from "./db.js";
import { securityHeaders } from "./middleware/security.js";
import { waitlistRouter } from "./routes/waitlist.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT ?? 3000);
const HOST = "0.0.0.0";
const distPath = path.join(__dirname, "../dist");

const app = express();
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(securityHeaders);
app.use(express.json({ limit: "16kb" }));

let dbReady = false;

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true, db: dbReady });
});

app.use("/api/waitlist", waitlistRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(distPath));

  app.get("{*path}", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      next();
      return;
    }
    res.sendFile(path.join(distPath, "index.html"));
  });
}

async function initDatabase() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not set — waitlist API will not work");
    return;
  }

  try {
    await runMigrations();
    dbReady = true;
    console.log("Database migrations complete");
  } catch (error) {
    console.error("Database migration failed:", error);
  }
}

async function start() {
  app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
    void initDatabase();
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

process.on("SIGTERM", async () => {
  await closePool();
  process.exit(0);
});
