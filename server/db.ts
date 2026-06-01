import fs from "node:fs/promises";
import path from "node:path";
import pg from "pg";

let pool: pg.Pool | null = null;

function resolveSsl(connectionString: string): pg.PoolConfig["ssl"] {
  if (process.env.NODE_ENV !== "production") return undefined;

  const lower = connectionString.toLowerCase();
  if (lower.includes("sslmode=disable") || lower.includes(".railway.internal")) {
    return undefined;
  }

  return { rejectUnauthorized: false };
}

export function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!pool) {
    pool = new pg.Pool({
      connectionString,
      ssl: resolveSsl(connectionString),
      connectionTimeoutMillis: 10_000,
    });
  }

  return pool;
}

export async function runMigrations() {
  const sqlPath = path.join(process.cwd(), "db/migrations/001_waitlist.sql");
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
