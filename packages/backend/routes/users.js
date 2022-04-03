import express from "express";
import { connection } from "../server.js";

const router = express.Router();

router.get("/", (req, res) => {
  // Get all fakebook users
  try {
    connection.query(`SELECT * FROM fakebook.users`, (err, results) => {
      if (err) res.status(400).send(err);
      res.status(200).send(results);
    });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
