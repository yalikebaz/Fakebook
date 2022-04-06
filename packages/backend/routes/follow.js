import express from "express";
import { connection } from "../server.js";

const router = express.Router();

// Get following (user is following) by user id
router.get("/:user_id/following", (req, res) => {
  try {
    connection.query(
      `SELECT followers.user_id, followers.is_following, users.name 
      FROM users
      INNER JOIN followers ON users.id=followers.is_following
      WHERE followers.user_id = '${req.params.user_id}';`,
      (err, results) => {
        if (err) res.status(400).send(err);

        let following = [];
        results.map(field => {
          following.push({ name: field.name, id: field.is_following });
        });

        res.status(200).send(following);
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Get followers (user is followed by) by user id
router.get("/:user_id/followers", (req, res) => {
  try {
    connection.query(
      `SELECT followers.user_id, followers.is_following, users.name
       FROM users
       INNER JOIN followers ON users.id=followers.user_id
       WHERE followers.is_following = '${req.params.user_id}';`,

      (err, results) => {
        if (err) res.status(400).send(err);

        let followers = [];
        results.map(field => {
          followers.push({ name: field.name, id: field.user_id });
        });

        res.status(200).send(followers);
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Follow someone by user id, and id of the user to follow
router.post("/:user_id/:is_following_id", (req, res) => {
  try {
    connection.query(
      `INSERT INTO followers (user_id, is_following) VALUES ('${req.params.user_id}','${req.params.is_following_id}');`,
      (err, results) => {
        if (err) res.status(400).send(err);

        res.status(200).send({
          user: req.params.user_id,
          is_following: req.params.is_following_id
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Unfollow someone by user id, and the if of the user to unfollow
router.delete("/:user_id/:is_following_id", (req, res) => {
  try {
    connection.query(
      `DELETE FROM followers WHERE (user_id = '${req.params.user_id}' AND is_following = '${req.params.is_following_id}');`,
      (err, results) => {
        if (err) res.status(400).send(err);

        res.status(200).send({
          user: req.params.user_id,
          is_not_following: req.params.is_following_id
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});
export default router;
