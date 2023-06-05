import style from "../css/Input.module.css";

const Input = ({ type, text, name, placeholder, handleOnChang, value }) => {
  return (
    <div className={style.formControl}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChang}
        value={value}
      />
    </div>
  );
};

export default Input;
