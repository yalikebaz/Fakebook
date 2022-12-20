import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Post from '../../components/Post/Post';
import { getFollowData } from '../../redux/actions/follower';

function UserProfile() {
  const { user_id: connectionId, user_name: userName } = useParams();
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
          `${process.env.REACT_APP_HOST}/posts/${connectionId}`,
        );

        const sortedPosts = response.data.sort((a, b) => (
        // eslint-disable-next-line no-nested-ternary
          a.time < b.time ? 1 : b.time < a.time ? -1 : 0
        ));
        setUserPosts(sortedPosts);
      } catch (error) {
        throw new Error();
      }
    };
    getUserData();
  }, [connectionId]);

  useEffect(() => {
    const firstName = userName.charAt(0).toUpperCase() + userName.slice(1);
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
        await axios.post(`${process.env.REACT_APP_HOST}/follow/${loggedInUserId}/${connectionId}`);
        dispatch(getFollowData(loggedInUserId));
      } catch (error) {
        throw new Error();
      }
    } else if (isFollowing) {
      try {
        await axios.delete(`${process.env.REACT_APP_HOST}/follow/${loggedInUserId}/${connectionId}`);
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
      <h2>{`Follow ${name} to see their posts in your timeline`}</h2>
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
