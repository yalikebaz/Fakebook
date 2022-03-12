import Nav from "../Nav/Nav";
import "./Container.css";

const Container = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="content">{children}</div>
    </>
  );
};
export default Container;
