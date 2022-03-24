import { NavLink } from "react-router-dom";
import "./Nav.css";
import fakebook from "../../../src/assets/fakebook_white.png";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button/Button";

const Nav = () => {
  const { logout } = useAuth0();

  return (
    <>
      <nav>
        <img className="fb" src={fakebook} alt="fakebook" />
        <NavLink
          to={"/timeline"}
          className={({ isActive }) => (isActive ? "active " : "link")}
        >
          Timeline
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => (isActive ? "active " : "link")}
        >
          Profile
        </NavLink>
        <div className="logout" onClick={logout}>
          <Button>Logout</Button>
        </div>
      </nav>
    </>
  );
};
export default Nav;
