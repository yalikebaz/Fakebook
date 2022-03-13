import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import userActionCreator from "../../redux/actions/user";
import { useEffect } from "react";

const Timeline = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      console.log("user :>> ", user);
      dispatch(userActionCreator(user));
    }
  }, [dispatch, isLoading, user]);

  return (
    <>
      <p>Timeline view</p>
    </>
  );
};

export default Timeline;
