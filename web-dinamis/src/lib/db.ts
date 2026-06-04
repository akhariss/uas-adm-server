import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "konfigura_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

function getDatabaseErrorMessage(error: unknown): string {
  if (error instanceof AggregateError) {
    return error.errors.map(getDatabaseErrorMessage).join("; ");
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "Unknown database error.";
}

export async function query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  try {
    const [rows] = await pool.execute(sql, params as any[]);
    return rows as T[];
  } catch (error: unknown) {
    const message = getDatabaseErrorMessage(error);
    console.error("Database query failed:", message, error);
    throw new Error(`Database query failed: ${message}`);
  }
}

export { pool };
