import style from "../css/Home.module.css";
import wallpaper from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";
const Home = () => {
  return (
    <section className={style.homeContainer}>
      <h1>
        Hello welcome to the project manager <span>Get Budgets</span>
      </h1>
      <p>
        With get Budget you can manage your projects, edit and also budget them
        intuitively
      </p>

      <LinkButton to="/newbudget" text=" Get Started" />

      <img src={wallpaper} alt="Get budget" />
    </section>
  );
};

export default Home;
