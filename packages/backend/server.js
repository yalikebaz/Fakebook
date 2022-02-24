import express from "express";
import loginRouter from "./routes/login.js";
import mysql from "mysql2";
import colors from "colors";
import dotenv from "dotenv"
import cors from "cors"

colors.enable()
dotenv.config()

// Connecting to mySql
const connection = mysql.createConnection({
  host: process.env.SQL_CREDS_HOST,
  user: process.env.SQL_CREDS_USER,
  password: process.env.SQL_CREDS_PASS,
  database: process.env.SQL_CREDS_DB
});

connection.connect(error => {
  if (error) {
    return console.error("Database connection error: ".red + error.message.red);
  }
  console.log("Connected to the MySQL server!".blue.underline);
});

const app = express();

app.use(cors())

app.use("/login", loginRouter);

app.listen(3001, () => {
  console.log("Server listening at 3001".blue.underline);
});
