import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const connectDB = async () => {
try {
    
 const conn =   await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected successfully at ${conn.connection.host}`);

} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure

    
}


}

export default connectDB;