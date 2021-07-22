import React, { useReducer } from "react";
import * as S from "./style";
import * as uuid from "uuid";

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
  };

  const id = "ID";
  const rngId = uuid.v4();

  function saveProduto() {
    formData[id] = rngId;
    produtosSavedDB.push(formData);
    localStorage.setItem("Produtos", JSON.stringify(produtosSavedDB));
  }

  return (
    <S.ContainerExterno>
      <S.Header>Cadastro de Produtos</S.Header>
      <S.Form onSubmit={handleSubmit}>
        <S.FormChild>
          <label htmlFor="nome">Nome: </label>
          <S.FormInput
            id="nome"
            type="text"
            name="nome"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="descricao">Descrição: </label>
          <S.FormTextArea
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
            id="preco"
            type="text"
            name="preco"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="quantidade">Quantidade: </label>
          <S.FormInput
            id="quantidade"
            type="number"
            name="quantidade"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.Button onClick={saveProduto}>Cadastrar</S.Button>
      </S.Form>
      <S.NavBox>
      <S.Nav to={{ pathname: "/" }}>Voltar</S.Nav>
      <S.Nav to={{ pathname: "/Estoque" }}>Checar estoque</S.Nav>
      </S.NavBox>
    </S.ContainerExterno>
  );
}

export default App;
