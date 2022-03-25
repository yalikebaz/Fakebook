import "./Input.css";

const Input = ({ onChange, placeholder, block, value }) => {
  const blockClass = block ? "block" : "";

  return (
    <>
      <input
        placeholder={placeholder}
        onChange={onChange}
        type="text"
        className={`${blockClass} input`}
        value={value}
      />
    </>
  );
};

export default Input;
