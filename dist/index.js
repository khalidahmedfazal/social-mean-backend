// src/index.js
import express from 'express';
import dotenv from "dotenv";
import db from "./dal/dbConnection";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", async (req, res) => {
    await db.collection('users').find({}).toArray();
    res.send("Express + TypeScript Server");
});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
