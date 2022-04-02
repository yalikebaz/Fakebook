import { useDispatch, useSelector } from "react-redux";
import PostForm from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { getFeed } from "../../redux/actions/post";

const Timeline = () => {
  const [allPosts, setAllPosts] = useState();
  const dispatch = useDispatch();
  const userPosts = useSelector(state => state.posts);
  const user = useSelector(state => state.user);
  const feed = useSelector(state => state.feed);

  let firstName;
  if (user) {
    firstName = user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);
  }

  //TODO I think there is stil a place here for useeffect: to get posts again! in case posts were added from profile (and we dont want to refresh to get them?) not entirely sure... would profile posts trigger the app useeffect?

  // Gets the user's feed
  useEffect(() => {
    if (user) {
      dispatch(getFeed(user.sub));
    }
  }, [user, dispatch]);

  // Concatenates user's posts with their feed into 1 array: allPosts, sorted by time
  useEffect(() => {
    let x = userPosts.concat(feed);
    // TODO figure out wtf is happening with loaders/spinners/conditionals??
    // TODO fetching in app vs fetching here??

    x.sort((a, b) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0));

    setAllPosts(x);
  }, [feed, userPosts]);

  return (
    <>
      <section>
        <h1>{firstName}'s timeline</h1>
        <PostForm />
      </section>

      <section>
        <h2>Posts</h2>
        {allPosts &&
          allPosts.map(post => <Post key={post.id} postContents={post} />)}
      </section>
    </>
  );
};

export default Timeline;
