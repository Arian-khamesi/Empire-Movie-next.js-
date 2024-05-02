import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Actor from "@/models/Actors";


export async function GET() {
    try {
      await connectDB();
  
      const actors = await Actor.find();
  
      return NextResponse.json(
        {
          data: actors,
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