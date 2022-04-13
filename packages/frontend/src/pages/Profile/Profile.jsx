import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Connections from '../../components/Connections/Connections';
import Post from '../../components/Post/Post';
import PostForm from '../../components/PostForm/PostForm';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);
  let userPosts = useSelector((state) => state.posts);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    userPosts = userPosts.sort((a, b) => (a.time < b.time ? 1 : b.time < a.time ? -1 : 0));
    setPosts(userPosts);
  }, [userPosts]);

  return (
    <div className="profileContainer">
      <div className="leftContainer">
        <h1 className="profileTitle">{`Hi, ${user?.nickname}`}</h1>
        <h2>What have you been up to?</h2>
        <PostForm />
        <h2>Your posts</h2>
        {posts.map((post) => <Post key={post.id} postContents={post} />)}
      </div>
      <Connections />
    </div>
  );
}

export default Profile;
