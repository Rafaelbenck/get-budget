import { Link } from "react-router-dom";
import style from "../css/LinkButton.module.css";

const LinkButton = ({ to, text }) => {
  return (
    <>
      <Link to={to} className={style.button}>
        {text}
      </Link>
    </>
  );
};

export default LinkButton;
