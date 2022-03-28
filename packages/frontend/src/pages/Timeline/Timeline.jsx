import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import PostForm from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";

const Timeline = () => {
  const userPosts = useSelector(state => state.posts);
  const { user } = useAuth0();
  const firstName =
    user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

  //TODO I think there is stil a place here for useeffect: to get posts again! in case posts were added from profile (and we dont want to refresh to get them?) not entirely sure... would profile posts trigger the app useeffect?
  return (
    <>
      <section>
        <h1>{firstName}'s timeline</h1>
        <PostForm />
      </section>

      <section>
        <h2>Posts</h2>
        {userPosts.map(post => (
          <Post key={post.id} postContents={post} />
        ))}
      </section>
    </>
  );
};

export default Timeline;
