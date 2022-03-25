import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import "./PostForm.css";
import { useState } from "react";
import { addNewPost } from "../../redux/actions/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
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

    const postContents = {
      title,
      body
    };
    dispatch(addNewPost(postContents));
  };

  return (
    <form className="formWrapper">
      <input
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Name your post"
        className="postName"
      />
      <textarea
        onChange={e => setBody(e.target.value)}
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
