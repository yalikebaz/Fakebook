import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost } from "../../redux/actions/post";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Post.css";

const Post = ({ postContents }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(postContents.title);
  const [body, setBody] = useState(postContents.body);
  const user = useSelector(state => state.user);

  const getName = () => {
    let firstName;

    if (user && postContents.poster === user.sub) {
      firstName = user.nickname;
    } else {
      firstName = postContents.name;
    }
    firstName = firstName?.charAt(0).toUpperCase() + firstName?.slice(1);

    return firstName;
  };

  let time = new Date(postContents.time);
  time = time.toString().slice(0, 24);

  const onDeletePost = id => {
    dispatch(deletePost(id));
  };

  const onEditPost = id => {
    if (!editing) {
      setEditing(true);
    } else if (editing) {
      setEditing(!editing);
      dispatch(editPost(title, body, id));
    }
  };

  // Checks if logged in user is the poster of a post
  const isPoster = () => {
    if (user && user.sub === postContents.poster) {
      return true;
    }
    return false;
  };

  return (
    <div className="postContainer">
      <section>
        {/* Only shows Edit and Delete buttons if the logged in user is the poster of the post  */}
        {isPoster() && (
          <>
            <div className="deletePost">
              <Button onClick={() => onDeletePost(postContents.id)}>
                Delete
              </Button>
            </div>
            <div className="editPost">
              <Button onClick={() => onEditPost(postContents.id)}>
                {editing ? "Stop editing" : "Edit"}
              </Button>
            </div>
          </>
        )}
        {/* <p className="poster">{getName()}</p> */}
        {/* <p className="poster">{`name`}</p> */}
        <p className="poster">{getName()}</p>
        <p className="postTime">{time}</p>
        <hr />
      </section>

      {/* Body of post */}
      <section>
        {editing ? (
          <>
            <div className="title">
              <Input
                onChange={e => setTitle(e.target.value)}
                value={title}
                block
              />
            </div>
            <textarea
              onChange={e => setBody(e.target.value)}
              rows="4"
              cols="40"
              value={body}
            />
          </>
        ) : (
          <>
            <h1>{postContents.title}</h1>
            <p>{postContents.body}</p>
          </>
        )}
      </section>
    </div>
  );
};

export default Post;
