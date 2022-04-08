import { useSelector } from 'react-redux';
import React from 'react';
import Connections from '../../components/Connections/Connections';
import Post from '../../components/Post/Post';
import PostForm from '../../components/PostForm/PostForm';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);
  const userPosts = useSelector((state) => state.posts);

  return (
    <div className="profileContainer">
      <div className="leftContainer">
        <h1>{`Hi, ${user?.nickname}`}</h1>
        <PostForm />
        <h2>Your posts</h2>
        {userPosts.map((post) => <Post key={post.id} postContents={post} />)}
      </div>
      <Connections />
    </div>
  );
}

export default Profile;
