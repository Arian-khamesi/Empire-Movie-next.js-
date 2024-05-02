import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/Users";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";


export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials

                try {
                    await connectDB()
                } catch (error) {
                    throw new Error("There is a problem with the server")
                }

                if (!email || !password) {
                    throw new Error("Please enter correct and valid information")
                }

                const user = await User.findOne({ email })

                if (!user)
                    throw new Error("Please create an account first")

                const isValid = await verifyPassword(password, user.password)

                if (!isValid)
                    throw new Error("Email or password is incorrect")

                return { email }
            }

        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }