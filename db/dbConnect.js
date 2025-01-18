import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        let conn = await mongoose.connect(process.env.MONGODB_URI);

        if (conn) {
            console.log('Connection is successful.');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);  // Exit process with failure
    }
};
