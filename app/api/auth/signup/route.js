import { NextResponse } from "next/server";
import User from "@/app/models/user";
import { connectDB } from "@/db/dbConnect";
import bcrypt from "bcrypt";

export async function POST(request) {

    try {

        let data = await request.json()

        await connectDB()

        let existingUser = await User.findOne({ email: data.email })
        if (existingUser) {
            return NextResponse.json({ success: false, error: "User already exists" })
        }

        let hashedPassword = await bcrypt.hash(data.password, 10)

        let user = await User({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: hashedPassword
        })
        user.save()

        return NextResponse.json({ success: true, data })

    } catch (error) {

        console.log(error)
        return NextResponse.json({ success: false, error })

    }

}
