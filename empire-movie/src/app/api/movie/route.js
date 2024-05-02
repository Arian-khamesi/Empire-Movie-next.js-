import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Movie from "@/models/Movies";


export async function GET() {
    try {
      await connectDB();
  
      const movies = await Movie.find();
  
      return NextResponse.json(
        {
          data: movies,
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