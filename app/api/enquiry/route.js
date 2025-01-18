import { NextResponse } from "next/server";
import Enquiry from "@/app/models/enquiry";
import { connectDB } from "@/db/dbConnect";

export async function POST(request) {
    const { name, email, phone, message } = await request.json();

    await connectDB();

    try {
        const enquiry = new Enquiry({
            name,
            email,
            phone,
            message
        });

        await enquiry.save();  // Save the document to the database

        return NextResponse.json({ success: true, enquiry });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: error.message });
    }
}