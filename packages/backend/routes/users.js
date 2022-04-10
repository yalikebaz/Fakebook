import express from "express";
import { connection } from "../server.js";

const router = express.Router();

router.get("/", (req, res) => {
  // Get all fakebook users
  try {
    connection.query(`SELECT * FROM ${process.env.SQL_CREDS_DB}.users`, (err, results) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(results);
    });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
