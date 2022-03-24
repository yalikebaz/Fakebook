import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { checkUser } from "../../redux/actions/user";
import { useEffect } from "react";
import PostForm from "../../components/PostForm/PostForm";
import { getPosts } from "../../redux/actions/post";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLoading, user]);

  return (
    <>
      <section>
        <h1>{firstName}'s timeline</h1>
        <PostForm />
      </section>

      <section>
        <h2>Posts</h2>
        {allPosts.map(post => (
          <Post key={post.id} postContents={post} />
        ))}
      </section>
    </>
  );
};

export default Timeline;
