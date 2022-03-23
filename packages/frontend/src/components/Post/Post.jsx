import "./Post.css";

const Post = ({ title, body }) => {
  return (
    <div className="postContainer">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
