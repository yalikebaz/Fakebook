import axios from "axios";
import "./UserProfile.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";

const UserProfile = ({ user }) => {
  //TODO name this page better cause it conflicts with Profile.jsx
  let { user_id: userId } = useParams();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/posts/${userId}`
        );
        setUserPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [userId]);

  useEffect(() => {
    if (userPosts.length === 0) {
      return;
    }
    let firstName =
      userPosts[0].name.charAt(0).toUpperCase() + userPosts[0].name.slice(1);
    setName(firstName);
  }, [userPosts]);

  const handleClick = () => {};

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="profile">
      <Button onClick={onBack}>◁ Back</Button>
      <h1>{`${name}'s profile`}</h1>
      <h2>{`${name}'s posts`}</h2>
      <Button block onClick={handleClick}>
        Follow User
      </Button>
      {userPosts.map(post => {
        return <Post key={post.id} postContents={post} />;
      })}
    </div>
  );
};

export default UserProfile;
