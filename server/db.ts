import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let pool: pg.Pool | null = null;

export function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!pool) {
    pool = new pg.Pool({
      connectionString,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
    });
  }

  return pool;
}

export async function runMigrations() {
  const sqlPath = path.join(__dirname, "../db/migrations/001_waitlist.sql");
  const sql = await fs.readFile(sqlPath, "utf-8");
  const db = getPool();
  await db.query(sql);
}

export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
