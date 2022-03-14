import express from "express";
import { connection } from "../server.js";

const router = express.Router();

router.post("/", (req, res) => {
  // Add user to mySQL db
  const { id, name } = req.body;
  try {
    connection.query(
      `REPLACE INTO fakebook.users SET id = '${id}', name = '${name}'`,
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
