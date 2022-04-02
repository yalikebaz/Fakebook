import { useSelector } from "react-redux";
import Followers from "../../components/Followers/Followers";
import Post from "../../components/Post/Post";
import PostForm from "../../components/PostForm/PostForm";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(state => state.user);
  const userPosts = useSelector(state => state.posts);

  return (
    <>
      <h1>{`Hi, ${user?.nickname}`}</h1>
      <div className="profileContainer">
        <div className="leftContainer">
          <PostForm />
          <h2>Your posts</h2>
          {userPosts.map(post => {
            return <Post key={post.id} postContents={post} />;
          })}
        </div>
        <Followers />
      </div>
    </>
  );
};

export default Profile;
