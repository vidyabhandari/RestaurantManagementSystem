import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleWare } from "./error/error.js";
import loginsignup from "./routes/loginsignup.js";

const app = express();
dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/loginsignup", loginsignup);

dbConnection();

app.use(errorMiddleWare);

export default app;
