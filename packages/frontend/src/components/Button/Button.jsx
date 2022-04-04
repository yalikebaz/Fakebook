import "./Button.css";

const Button = ({ block, children, onClick }) => {
  return (
    <button className={block && "block"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
