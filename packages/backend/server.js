import express from "express";
import loginRouter from "./routes/login.js";
import postRouter from "./routes/posts.js";
import followRouter from "./routes/follow.js";
import usersRouter from "./routes/users.js";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = 3001;

// Connecting to mySql
export const connection = mysql.createConnection({
  host: process.env.SQL_CREDS_HOST,
  port: process.env.SQL_CREDS_PORT,
  user: process.env.SQL_CREDS_USER,
  password: process.env.SQL_CREDS_PASS,
  database: process.env.SQL_CREDS_DB
});

connection.connect(error => {
  console.log('Connecting to MySQL...')
  if (error) {
    return console.error(
      "Database connection error (is it on?): ".red + error.message.red
    );
  }
  console.log("Connected to the MySQL server!");
});

const app = express();
app.use(express.json());

app.use(cors());

app.use("/login", loginRouter);
app.use("/posts", postRouter);
app.use("/follow", followRouter);
app.use("/users", usersRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
