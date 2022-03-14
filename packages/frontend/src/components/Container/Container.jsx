import Nav from "../Nav/Nav";
import "./Container.css";
import { useAuth0 } from "@auth0/auth0-react";

const Container = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );
  }
  return (
    <>
      {isAuthenticated && <Nav />}
      <div className="content">{children}</div>
    </>
  );
};
export default Container;
