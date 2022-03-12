import { Link } from "react-router-dom";
import "./Nav.css";
import fakebook from "../../../src/assets/fakebook_white.png";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { logout } = useAuth0();

  return (
    <>
      <nav>
        <img className="fb" src={fakebook} alt="fakebook" />
        <Link to={"/profile"} className="link">
          Profile
        </Link>
        <Link to={"/timeline"} className="link">
          Timeline
        </Link>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </nav>
    </>
  );
};
export default Nav;
