import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import empRoute from "./routes/empRoute.js";
import taskRoute from "./routes/taskRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MONGODB Connected"))
.catch(err => console.error(err));


app.use("/api/emp", empRoute);
app.use("/api/task", taskRoute);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log("Server running on PORT",PORT));