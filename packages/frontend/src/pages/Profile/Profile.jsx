import { useAuth0 } from "@auth0/auth0-react";
import Followers from "../../components/Followers/Followers";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <>
      <h1>{`Hi, ${user?.nickname}`}</h1>
      <pre>{user.sub}</pre>
      <Followers />
    </>
  );
};

export default Profile;
