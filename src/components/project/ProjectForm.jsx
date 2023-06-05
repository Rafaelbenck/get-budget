/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

import style from "../css/ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

const ProjectForm = ({ handleSubmit, buttonText, projectData }) => {
  //useState será uma array vazia aguardando a resposta dos dados pela api
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  //Esse cara tem a função de renderizar uma vez apenas o retorno dos dados
  useEffect(() => {
    // Aqui devemos criar uma promise para podermos fazer os chamados dos metodos da api
    fetch("http://localhost:3000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      //aqui vou pegar a resposta e transformarei em json
      .then((res) => res.json())
      //aqui me retornará os dados já tratados
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //aqui já podemos criar nosso método de submit, pois já estamos recebendo o evento
  const submit = (e) => {
    //utilizamos um prevent default para não deixarmos o formulário ser executado com page reload que envia o metodo e dps retorna a pagina que é o comportamento pradão do html
    e.preventDefault();
    console.log(project);
    // handleSubmit(project);
  };

  //esse cara aqui vai pegar o set project e alterar o nome do projeto dentro dele
  //isso funcionará em qualquer formulário que você precise digitar, um metodo dinamico para alterar o valor dele em inputs
  const handleChange = (e) => {
    // vamos fazer um destructure para pegar então todo o dado do
    //vamos dizer que e.target.name ou seja o nome do input que será o name ou budget será igual ao e.target.value
    setProject({ ...project, [e.target.name]: e.target.value });

    console.log(project);
  };

  //vamos recrialo para a cateogira
  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectIndex].text,
      },
    });
  };

  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        type="text"
        text="Project Name"
        name="name"
        placeholder="Insert project name"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Project Budget"
        name="budget"
        placeholder="Insert your budget"
        handleOnchange={handleChange}
      />
      <Select
        name="category_id"
        text="Select your category"
        options={categories}
        handleOnchange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={buttonText} />
    </form>
  );
};

export default ProjectForm;
