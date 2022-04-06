import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Post from '../../components/Post/Post';
import { getFollowData } from '../../redux/actions/follower';

function UserProfile() {
  const { user_id: connectionId } = useParams();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  const [name, setName] = useState('');
  const [isFollowing, setIsFollowing] = useState(false);
  const { following } = useSelector((state) => state.followData);
  const { sub: loggedInUserId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/posts/${connectionId}`,
        );
        setUserPosts(response.data);
      } catch (error) {
        throw new Error();
      }
    };
    getUserData();
  }, [connectionId]);

  useEffect(() => {
    if (userPosts.length === 0) {
      return;
    }
    const firstName = userPosts[0].name.charAt(0).toUpperCase() + userPosts[0].name.slice(1);
    setName(firstName);
  }, [userPosts]);

  useEffect(() => {
    if (!following) return;
    const filterFollowing = following.filter((user) => user.id === connectionId);
    // eslint-disable-next-line no-unused-expressions
    filterFollowing.length > 0 ? setIsFollowing(true) : setIsFollowing(false);
  }, [following]);

  const toggleFollow = async () => {
    if (!isFollowing) {
      try {
        await axios.post(`http://localhost:3001/follow/${loggedInUserId}/${connectionId}`);
        dispatch(getFollowData(loggedInUserId));
      } catch (error) {
        throw new Error();
      }
    } else if (isFollowing) {
      try {
        await axios.delete(`http://localhost:3001/follow/${loggedInUserId}/${connectionId}`);
        dispatch(getFollowData(loggedInUserId));
      } catch (error) {
        throw new Error();
      }
    }
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="profile">
      <Button onClick={onBack}>◁ Back</Button>
      <h1>{`${name}'s profile`}</h1>
      <h2>{`${name}'s posts`}</h2>
      <Button block onClick={toggleFollow}>
        {isFollowing ? 'Unfollow User' : 'Follow user'}
      </Button>
      {userPosts.map((post) => (
        <Post key={post.id} postContents={post} />
      ))}
    </div>
  );
}

export default UserProfile;
