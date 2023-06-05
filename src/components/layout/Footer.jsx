import { FaInstagram, FaSpotify, FaLinkedin, FaGithub } from "react-icons/fa";

import style from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.listIcons}>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaSpotify />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className={style.copyright}>
        <span>Get Budgets</span>&copy; 2023
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam hic eum
        itaque ducimus! Blanditiis consequuntur quod veniam voluptatibus saepe
        aut velit nulla quis impedit dignissimos, magni, sapiente laudantium
        illo dolores?
      </p>
    </footer>
  );
};

export default Footer;
