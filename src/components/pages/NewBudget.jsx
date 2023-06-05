import style from "../css/NewBudget.module.css";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";

const NewBudget = () => {
  const history = useNavigate();

  const createPost = (project) => {
    //projeto terão alguns atributos iniciados zerados
    //initialize budget and services
    project.budget = 0;
    project.services = [];

    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "content-type": "application-json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //aqui vai o redirect
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.NewBudgetContainer}>
      <h1>Create a new Budget</h1>
      <p>
        Create your project in a personality way and then manage the services
      </p>
      <ProjectForm handleSubmit={createPost} buttonText="Start project" />
    </div>
  );
};

export default NewBudget;
