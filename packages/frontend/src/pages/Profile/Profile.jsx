import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );
  }

  return (
    <>
      <h1>{`Hi, ${user?.nickname}`}</h1>
      <pre>{user.sub}</pre>
    </>
  );
};

export default Profile;
