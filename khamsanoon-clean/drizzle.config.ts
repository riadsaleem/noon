import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: "mysql://root:QRRfuwwZisGzPWnhTOLovptthflUgaKb@shuttle.proxy.rlwy.net:10826/railway",
  },
});