import { useDispatch, useSelector } from 'react-redux';
import './Timeline.css';
import React, { useEffect, useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import Post from '../../components/Post/Post';
import { getFeed } from '../../redux/actions/post';

function Timeline() {
  const [allPosts, setAllPosts] = useState();
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const feed = useSelector((state) => state.feed);

  let firstName;
  if (user) {
    firstName = user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);
  }

  // Gets the user's feed
  useEffect(() => {
    if (user.sub) {
      dispatch(getFeed(user.sub));
    }
  }, [user, dispatch]);

  // Concatenates user's posts with their feed into 1 array: allPosts, sorted by time
  useEffect(() => {
    const timeline = userPosts.concat(feed);
    // eslint-disable-next-line no-nested-ternary
    timeline.sort((a, b) => (a.time < b.time ? 1 : b.time < a.time ? -1 : 0));
    setAllPosts(timeline);
  }, [feed, userPosts]);

  return (
    <div className="timelineContainer">
      <section>
        <h1>
          {firstName}
          's timeline
        </h1>
        <PostForm />
      </section>

      <section>
        <h2>The latest news from you and the people you follow...</h2>
        {allPosts
          && allPosts.map((post) => <Post key={post.id} postContents={post} />)}
      </section>
    </div>
  );
}

export default Timeline;
