import express from "express";
import { connection } from "../server.js";

const router = express.Router();

router.post("/", (req, res) => {
  // Add user to mySQL db
  const { id, name } = req.body;
  try {
    connection.query(
      // followed this: https://stackoverflow.com/questions/1361340/how-can-i-do-insert-if-not-exists-in-mysql?noredirect=1&lq=1
      `INSERT IGNORE INTO ${process.env.SQL_CREDS_DB}.users SET id = '${id}', name = '${name}'`,
      (err, results) => {
        if (err) res.status(400).send(err);
        res.status(200).send("Success");
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
