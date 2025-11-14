import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected to mongoDB")

    } catch (error) {
        console.log(`there is error in connecting mongoose`, error)
        process.exit(1)
    }
}

export default connectDB;