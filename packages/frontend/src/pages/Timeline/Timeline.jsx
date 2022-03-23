import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { checkUser } from "../../redux/actions/user";
import { useEffect } from "react";
import PostForm from "../../components/PostForm/PostForm";
import { getPosts, post } from "../../redux/actions/post";
import Post from "../../components/Post/Post";

const Timeline = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.posts);
  const loggedInUser = useSelector(state => state.loggedInUser);
  const { user, isLoading } = useAuth0();
  const firstName =
    user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getPosts(user.sub));

      // No need to check for user in DB if we have them already
      if (!loggedInUser) {
        dispatch(checkUser(user));
      }
    }
  }, [dispatch, isLoading, user]);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const postContents = {
      title,
      body
    };
    //TODO make this saga
    dispatch(post(postContents));
  };

  return (
    <>
      <h1>{firstName}'s timeline</h1>
      <PostForm
        setPostTitle={title => setTitle(title)}
        setPostBody={body => setBody(body)}
        handleSubmit={handleSubmit}
      />
      <h2>Posts</h2>
      {allPosts.map((post, i) => (
        <div key={i}>
          <Post title={post.title} body={post.body} />
        </div>
      ))}
    </>
  );
};

export default Timeline;
