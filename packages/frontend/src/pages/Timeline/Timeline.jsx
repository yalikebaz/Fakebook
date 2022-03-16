import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { checkUser } from "../../redux/actions/user";
import { useEffect } from "react";
import PostForm from "../../components/PostForm/PostForm";

const Timeline = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
  const firstName =
    user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

  useEffect(() => {
    if (!isLoading) {
      dispatch(checkUser(user));
    }
  }, [dispatch, isLoading, user]);

  const [postTitle, setPostTitle] = useState();
  const [postBody, setPostBody] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("postTitle :>> ", postTitle);
    console.log("postBody :>> ", postBody);
  };

  return (
    <>
      <p>{firstName}'s timeline</p>
      <PostForm
        setPostTitle={postTitle => setPostTitle(postTitle)}
        setPostBody={postBody => setPostBody(postBody)}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Timeline;
