import Nav from "../Nav/Nav";
import "./Container.css";
import { useAuth0 } from "@auth0/auth0-react";

const Container = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && <Nav />}
      <div className="content">{children}</div>
    </>
  );
};
export default Container;
