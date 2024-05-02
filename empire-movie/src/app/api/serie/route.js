import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Serie from "@/models/Series";


export async function GET() {
    try {
      await connectDB();
  
      const series = await Serie.find();
  
      return NextResponse.json(
        {
          data: series,
        },
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "A problem has occurred on the server" },
        { status: 500 }
      );
    }
  }