import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import PostForm from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";

const Timeline = () => {
  const allPosts = useSelector(state => state.posts);
  const { user } = useAuth0();
  const firstName =
    user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

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
