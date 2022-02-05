import mongoose from "mongoose";
require("dotenv").config();

export default async function connection(): Promise<void> {
    mongoose
        .connect(process.env.DB_CONNECTION!)
        .then(() => console.log("MongoDB Connected"))
        .catch((err: any) => console.log(err));
}
