import "./Input.css";

const Input = ({ placeholder, block }) => {
  const blockClass = block ? "block" : "";

  return (
    <>
      <input
        placeholder={placeholder}
        type="text"
        className={`${blockClass} input`}
      />
    </>
  );
};

export default Input;
