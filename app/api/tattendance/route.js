
import Attendance from "@/app/dashboard/attendance/page";
import { db } from "@/utils";
import { attendance, Students } from "@/utils/schema";
import { eq, isNull } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchparams=req.nextUrl.searchparams;
  const department=searchparams.get ('grade');
  const Month=searchparams.get('month')
  const result=await db.select({
    name:Students.name,
    present:attendance.present,
    day:attendance.day,
    date:attendance.date,
    department:Students.department,
    studentID:Students.rollNo,
    attendanceId:attendance.id,

  }).from(Students)
  .leftJoin(attendance,eq(Students.rollNo,attendance.studentId))
  .where(eq(Students.department,department))
  .where(
    or(eq(attendance.date,Month),
    isNull(Attendance.date)
  
  )
  )
  return NextResponse.json(result)
  
}