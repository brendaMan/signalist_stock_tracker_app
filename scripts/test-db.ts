import dotenv from "dotenv";
import { connectToDatabase } from "../database/mongoose";

dotenv.config();

async function testConnection() {
    try {
        console.log("Starting database connection test...");
        await connectToDatabase();
        console.log("Database connection test PASSED!");
        process.exit(0);
    } catch (error) {
        console.error("Database connection test FAILED!");
        console.error(error);
        process.exit(1);
    }
}

testConnection();
