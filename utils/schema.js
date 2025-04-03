import { sql } from "drizzle-orm";

import { datetime,serial ,int, mysqlDatabase, mysqlTable, varchar, boolean } from "drizzle-orm/mysql-core";


export const DEPARTMENT = mysqlTable("DEPARTMENT", {
  id: int("id").primaryKey().autoincrement(),
  department: varchar("department", { length:20 }).notNull(),
});


export const Students = mysqlTable("Students", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length:20 }).notNull(),
  rollNo: varchar("rollNo", { length:20 }).notNull(),
  phoneNo: varchar("phoneNo", { length:11 }).notNull(),
  address: varchar("address", { length:50 }).notNull(),
  department: varchar("department", { length:20 }).notNull(),
  year: varchar("year", { length:20 }).notNull(),
  
});

export const attendance = mysqlTable("attendance", {
  id: serial("id").primaryKey(),
  studentId: varchar("student_id", { length: 255 }).notNull(),
  studentName: varchar("student_name", { length: 255 }).notNull(),
  date: datetime("date").notNull().default(sql`CURRENT_TIMESTAMP`),
  status: varchar("status", { length: 10 }).notNull().default("Present"),
});

export const attendance2 = mysqlTable("attendance2",{
  id: int("id", { length: 11 }).primaryKey().autoincrement(),
  studentId:int('studentId',{length:11}).notNull(),
  present:boolean('present').default(false),
  day:int('day',{length:11}).notNull(),
  date:int('date',{length:11}).notNull(),

});