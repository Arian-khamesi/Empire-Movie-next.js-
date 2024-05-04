import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/Users";
import { hashPassword } from "@/utils/auth";
import { getServerSession } from "next-auth";


export async function POST(req) {
    try {
        await connectDB()

        const { fullName, userName, email, age, password } = await req.json()
        console.log(fullName, userName, email, age, password);

        if (!fullName || !userName || !email || !age || !password) {
            return NextResponse.json(
                { error: "Please fill in all the fields correctly" },
                { status: 422 }
            )
        }


        const existUser = await User.findOne({ email })
        console.log(existUser);


        if (existUser) {
            return NextResponse.json(
                { error: "A user has already registered with this information" },
                { status: 422 }
            )
        }


        const hashedPassword = await hashPassword(password)

        const newUser = await User.create(
            {
                fullName,
                userName,
                email,
                age,
                password: hashedPassword
            }
        )
        console.log(newUser);


        return NextResponse.json(
            { message: "You have successfully registered" },
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

export async function PATCH(req) {
    try {
        await connectDB();

        const { fullName, userName, email, age, password } = await req.json()
        console.log(fullName, userName, email, age, password);

        if (!fullName || !userName || !email || !age || !password) {
            return NextResponse.json(
                { error: "Please fill in all the fields correctly" },
                { status: 422 }
            )
        }

        const session = await getServerSession(req);
        if (!session) {
            return NextResponse.json(
                {
                    error: "Please log in to your account",
                },
                { status: 401 }
            );
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json(
                { error: "User account not found" },
                { status: 404 }
            );
        }

        if (
            !fullName || !userName || !email || !age || !password
        ) {
            return NextResponse.json(
                { error: "لطفا اطلاعات معتبر وارد کنید" },
                { status: 400 }
            );
        }

        User.fullName = fullName;
        User.userName = userName;
        User.email = email;
        User.age = age;
        User.password = password;
        User.save();

        return NextResponse.json(
            {
                message: "The changes have been successfully applied to your account",
            },
            {
                status: 200,
            }
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "There is a problem with the server" },
            { status: 500 }
        );
    }
}