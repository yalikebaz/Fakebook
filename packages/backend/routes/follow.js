import express from "express";
import { connection } from "../server.js";

const router = express.Router();

// Get followers by user id
router.get("/:user_id", (req, res) => {
  try {
    connection.query(
      `SELECT is_following FROM followers WHERE user_id = '${req.params.user_id}';`,
      (err, results) => {
        if (err) res.status(400).send(err);
        res.status(200).send(results);
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
