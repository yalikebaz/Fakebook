import express from "express";
import { connection } from "../server.js";

const router = express.Router();

// Get user posts by user id
router.get("/:user_id", (req, res) => {
  try {
    connection.query(
      `
      SELECT users.id AS 'userID', users.name, posts.id AS 'postId', posts.title, posts.body, posts.time FROM users
      INNER JOIN posts
      ON users.id=posts.poster
      WHERE users.id='${req.params.user_id}'
      `,
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

// Get following's posts by user id
router.get("/feed/:user_id", (req, res) => {
  try {
    connection.query(
      `SELECT posts.id, posts.poster, users.name, posts.title, posts.body, posts.time
       FROM posts
       INNER JOIN followers
       ON posts.poster=followers.is_following
       INNER JOIN users
       ON posts.poster=users.id
       WHERE followers.user_id='${req.params.user_id}'`,
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
  const { title, body, time } = req.body;
  try {
    connection.query(
      `INSERT INTO fakebook.posts (time, title, body, poster) VALUES ('${time}','${title}', '${body}', '${req.params.user_id}')`,

      (err, results) => {
        if (err) res.status(400).send(err);
        else {
          res.status(200).json({
            post_data: {
              id: results.insertId,
              time,
              title,
              body
            }
          });
        }
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

// Update post by post id
router.put("/:post_id", (req, res) => {
  const { title, body } = req.body;
  try {
    let query = `UPDATE fakebook.posts SET title = '${title}', body = '${body}' WHERE (id = '${req.params.post_id}');`;
    connection.query(query, (err, results) => {
      if (err) res.status(400).send(err);
      res.status(200).json({
        message: "Success",
        post: {
          id: req.params.post_id,
          title,
          body
        }
      });
    });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
