import { defineConfig } from "drizzle-kit";
import { connection } from "next/server";

export default defineConfig({
  dialect: "mysql",
  schema: "./utils/schema.js",
  dbCredentials:{
    host: "localhost",
  user: "root",
  database: "kema",
  password:"DODO@2003",
  port:3306
  }
});
