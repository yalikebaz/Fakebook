import Container from "../../components/Container/Container";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  console.log("user :>> ", user);

  if (isLoading) {
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );
  }

  return (
    <Container>
      <h1>{`Hi, ${user?.nickname}`}</h1>
      <pre>{user.sub}</pre>
    </Container>
  );
};

export default Profile;
