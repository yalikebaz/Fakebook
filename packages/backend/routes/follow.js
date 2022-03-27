import express from "express";
import { connection } from "../server.js";

const router = express.Router();

// Get follower ids by user id
router.get("/:user_id", (req, res) => {
  try {
    connection.query(
      // `SELECT is_following FROM followers WHERE user_id = '${req.params.user_id}';`,
      `SELECT followers.user_id, followers.is_following, users.name 
      FROM users
      INNER JOIN followers ON users.id=followers.is_following
      WHERE followers.user_id = '${req.params.user_id}';`,
      (err, results) => {
        if (err) res.status(400).send(err);

        let followers = [];
        results.map(field => {
          followers.push(field.name);
        });

        res.status(200).send(followers);
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Get follower name by follower id
router.get("/:follower_id", (req, res) => {
  try {
    connection.query(
      `SELECT is_following FROM followers WHERE user_id = '${req.params.user_id}';`,
      (err, results) => {
        if (err) res.status(400).send(err);

        let followers = [];
        results.map(field => {
          followers.push(field.is_following);
        });

        res.status(200).send(followers);
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Add followers by user id, and id of the user to follow
router.post("/:user_id", (req, res) => {
  try {
    connection.query(
      //todo replace hard code string
      `INSERT INTO followers (user_id, is_following) VALUES ('${req.params.user_id}','auth0|622e40f528e41500686fcbbf');`,
      (err, results) => {
        if (err) res.status(400).send(err);

        let followers = [];
        results.map(field => {
          followers.push(field.is_following);
        });

        res.status(200).send(followers);
      }
    );
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default router;
