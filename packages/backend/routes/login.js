import express from "express";
import { connection } from "../server.js";

const router = express.Router();

// If the user doesn't exist, add them to SQL DB
router.post("/", (req, res) => {
  const { id } = req.body;
  try {
    connection.query(
      `SELECT * FROM fakebook.users WHERE id = '${id}'`,
      (err, results) => {
        // If the data exists, return it
        if (results.length !== 0) {
          return res.json(results[0]);
        }
        // TODO Otherwise let's add it to the DB
        res.send("No matching data found");
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
