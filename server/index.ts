import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { closePool, runMigrations } from "./db.js";
import { waitlistRouter } from "./routes/waitlist.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT ?? 3000);
const distPath = path.join(__dirname, "../dist");

const app = express();
app.set("trust proxy", 1);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/waitlist", waitlistRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(distPath));

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      next();
      return;
    }
    res.sendFile(path.join(distPath, "index.html"));
  });
}

async function start() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is required");
    process.exit(1);
  }

  await runMigrations();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
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
