import style from "../css/SubmitButton.module.css";
const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={style.button}> {text}</button>
    </div>
  );
};

export default SubmitButton;
