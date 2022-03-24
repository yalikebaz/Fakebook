import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/post";
import Button from "../Button/Button";
import "./Post.css";

const Post = ({ postContents }) => {
  const dispatch = useDispatch();
  const onDeletePost = id => {
    dispatch(deletePost(id));
  };

  return (
    <div className="postContainer">
      <div className="deletePost">
        <Button onClick={() => onDeletePost(postContents.id)}>Delete</Button>
      </div>
      <h1>{postContents.title}</h1>
      <p>{postContents.body}</p>
    </div>
  );
};

export default Post;
