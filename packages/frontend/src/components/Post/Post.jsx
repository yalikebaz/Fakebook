import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../../redux/actions/post";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Post.css";

const Post = ({ postContents }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(postContents.title);
  const [body, setBody] = useState(postContents.body);
  const { user, isLoading } = useAuth0();

  const firstName =
    user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

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

  return (
    <div className="postContainer">
      <div className="deletePost">
        <Button onClick={() => onDeletePost(postContents.id)}>Delete</Button>
      </div>
      <div className="editPost">
        <Button onClick={() => onEditPost(postContents.id)}>
          {editing ? "Stop editing" : "Edit"}
        </Button>
      </div>
      <p>{!isLoading && firstName}</p>
      <hr />
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
    </div>
  );
};

export default Post;
