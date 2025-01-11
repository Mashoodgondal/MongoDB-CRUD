import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uukbk.mongodb.net/Topics-Data?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

export default connectDB;