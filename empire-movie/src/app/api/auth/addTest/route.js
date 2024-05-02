import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Movie from "@/models/Movies";
import Actor from "@/models/Actors";
import Serie from "@/models/Series";


export async function POST(req) {
    try {
        await connectDB()

        const { name,score,seasen,img,year,desc } = await req.json()
        console.log(name,score,seasen,img,year,desc);

        if (!name || !score || !seasen || !img || !year || !desc) {
            return NextResponse.json(
                { error: "Please fill in all the fields correctly" },
                { status: 422 }
            )
        }


        const newSerie = await Serie.create(
            {
                name,score,seasen,img,year,desc
            }
        )
        console.log(newSerie);


        return NextResponse.json(
            { message: "Youre movie successfully added" },
            { status: 201 }
        )


    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "some thing wrong in server" },
            { status: 500 }
        )
    }
}