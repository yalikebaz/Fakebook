import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import "./PostForm.css";
import { useState } from "react";
import { addNewPost } from "../../redux/actions/post";
import dayjs from "dayjs";

const PostForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [contentError, setContentError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setContentError(false);

    // Error handling empty title or body
    if (!title || !body) {
      setContentError(true);
      setTimeout(() => {
        setContentError(false);
      }, 5000);
      return;
    }

    let time = dayjs(Date()).format("YYYY-MM-DD HH:mm:ss");

    const postContents = {
      title,
      body,
      time,
      poster: user.sub
    };
    setBody("");
    setTitle("");
    dispatch(addNewPost(postContents));
  };

  return (
    <form className="formWrapper">
      <input
        onChange={e => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Name your post"
        className="postName"
      />
      <textarea
        onChange={e => setBody(e.target.value)}
        value={body}
        rows="4"
        cols="40"
        placeholder="What do you want to share?"
      />
      <div className="bottomRow">
        {contentError && (
          <p className="error">Please add content to your post!</p>
        )}
        <div className="submit">
          <Button onClick={handleSubmit}>Submit Post</Button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
