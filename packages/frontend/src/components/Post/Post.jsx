import Button from "../Button/Button";
import "./Post.css";

const Post = ({ title, body }) => {
  return (
    <div className="postContainer">
      <div className="deletePost">
        <Button>Delete</Button>
      </div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
