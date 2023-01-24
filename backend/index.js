import express from "express";
import mongoose, { connect } from 'mongoose';
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to database...");
      } catch (error) {
        throw error;
      }
}

// function to indicate when mongoDB is disconnected
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected...");
})

//middlewares
app.use(cors());
app.use(cookieParser())
app.use(express.json()); 

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
    dbConnect();
    console.log("Connected to backend...");
});