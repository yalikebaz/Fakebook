import "./Input.css";

const Input = ({ search, onChange, placeholder, block, value }) => {
  const blockClass = block ? "block" : "";

  return (
    <>
      <input
        placeholder={placeholder}
        onChange={onChange}
        type={search ? "search" : "text"}
        className={`${blockClass}`}
        value={value}
      />
    </>
  );
};

export default Input;
