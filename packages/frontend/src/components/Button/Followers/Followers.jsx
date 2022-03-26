import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../../../redux/actions/follower";

const Followers = () => {
  const user = useSelector(state => state.loggedInUser);
  return (
    <>
      {user && user.nickname}
      <p>Followers</p>
    </>
  );
};

export default Followers;
