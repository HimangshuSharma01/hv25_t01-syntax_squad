import { db } from "@/utils";
import { Students } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { studentId, studentName } = await req.json();

    await db.insert(attendance).values({
      studentId,
      studentName,
    });

    return NextResponse.json({ message: "Attendance marked successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to mark attendance" }, { status: 500 });
  }
}
