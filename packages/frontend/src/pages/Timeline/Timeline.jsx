import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { checkUser } from "../../redux/actions/user";
import { useEffect } from "react";

const Timeline = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      dispatch(checkUser(user));
    }
  }, [dispatch, isLoading, user]);

  const firstName =
    user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

  return (
    <>
      <p>{firstName}'s timeline</p>
    </>
  );
};

export default Timeline;
