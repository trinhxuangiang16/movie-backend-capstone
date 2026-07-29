import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/index.js";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL missing");
  process.exit(1);
}

const dbUrl = new URL(DATABASE_URL);

const isAzureDb = dbUrl.hostname.includes("azure.com");

const adapter = new PrismaMariaDb({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: decodeURIComponent(dbUrl.password),
  database: dbUrl.pathname.substring(1),
  port: Number(dbUrl.port),
  connectionLimit: 5,
  connectTimeout: 10000,
  allowPublicKeyRetrieval: true,
  ssl: (isAzureDb || process.env.NODE_ENV === "production") ? { rejectUnauthorized: false } : false,
});

const prisma = new PrismaClient({ adapter });

export { prisma };
