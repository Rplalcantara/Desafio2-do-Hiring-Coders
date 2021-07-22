import React, { useReducer } from "react";
import * as S from "./style";
import * as uuid from "uuid";
import Swal from "sweetalert2";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});

  let checklocal = JSON.parse(localStorage.getItem("Produtos"));
  let produtosSavedDB = checklocal === null ? [] : checklocal;

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    saveProduto();
  };

  const id = "ID";
  const rngId = uuid.v4();

  function saveProduto() {
    formData[id] = rngId;
    produtosSavedDB.push(formData);
    localStorage.setItem("Produtos", JSON.stringify(produtosSavedDB));
    Swal.fire({
      icon: "success",
      title: "Cadastrado com sucesso!",
      showConfirmButton: false,
    });
  }

  return (
    <S.ContainerExterno>
      <S.Header>Cadastro de Produtos</S.Header>
      <S.Form onSubmit={handleSubmit}>
        <S.FormChild>
          <label htmlFor="nome">Nome: </label>
          <S.FormInput
            required
            id="nome"
            type="text"
            name="nome"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="descricao">Descrição: </label>
          <S.FormTextArea
            required
            id="descricao"
            type="text"
            name="descricao"
            maxLength="150"
            rows="3"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="preco">Preço: </label>
          <S.FormInput
            required
            id="preco"
            type="text"
            name="preco"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="quantidade">Quantidade: </label>
          <S.FormInput
            required
            id="quantidade"
            type="number"
            name="quantidade"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
      <S.NavBox>
        <S.Nav to={{ pathname: "/" }}>Voltar</S.Nav>
        <S.Nav to={{ pathname: "/Estoque" }}>Checar estoque</S.Nav>
      </S.NavBox>
    </S.ContainerExterno>
  );
}

export default App;
