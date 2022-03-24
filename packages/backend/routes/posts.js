import express from "express";
import { connection } from "../server.js";

const router = express.Router();

// Get posts by user id
router.get("/:user_id", (req, res) => {
  try {
    connection.query(
      `SELECT * FROM fakebook.posts where poster='${req.params.user_id}';`,
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

// Submit post to user id
router.post("/:user_id", (req, res) => {
  const { title, body } = req.body;
  try {
    connection.query(
      `INSERT INTO fakebook.posts (title, body, poster) VALUES ('${title}', '${body}', '${req.params.user_id}')`,

      (err, results) => {
        if (err) res.status(400).send(err);
        res.status(200).json({
          post_data: {
            id: results.insertId,
            title,
            body
          }
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Delete post by post id
router.delete("/:post_id", (req, res) => {
  try {
    connection.query(
      // `INSERT INTO fakebook.posts (title, body, poster) VALUES ('${title}', '${body}', '${req.params.user_id}')`,
      `DELETE FROM fakebook.posts WHERE(id = '${req.params.post_id}')`,
      (err, results) => {
        if (err) res.status(400).send(err);
        res.status(200).json({ deleted_post_id: req.params.post_id });
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
