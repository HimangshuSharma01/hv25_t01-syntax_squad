import { db } from "@/utils";
import { DEPARTMENT } from "@/utils/schema";
import { NextResponse } from "next/server";


export async function GET(req){
    const result=await db.select().from(DEPARTMENT);
    return NextResponse.json(result);
}