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

  let checklocal = JSON.parse(localStorage.getItem("Clientes"));
  let clientesSavedDB = checklocal === null ? [] : checklocal;

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    saveCliente();
  };

  const id = "ID";
  const rngId = uuid.v4();

  function saveCliente() {
    formData[id] = rngId;
    clientesSavedDB.push(formData);
    localStorage.setItem("Clientes", JSON.stringify(clientesSavedDB));
    Swal.fire({
      icon: "success",
      title: "Cadastrado com sucesso!",
      showConfirmButton: false,
    });
  }

  return (
    <S.ContainerExterno>
      <S.Header>Cadastro de Clientes</S.Header>
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
          <label htmlFor="sobrenome">Sobrenome :</label>
          <S.FormInput
            required
            id="sobrenome"
            type="text"
            name="sobrenome"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="endereco">Endereço: </label>
          <S.FormInput
            required
            id="endereco"
            type="text"
            name="endereco"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="cidade">Cidade: </label>
          <S.FormInput
            required
            id="cidade"
            type="text"
            name="cidade"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="estado">Estado: </label>
          <S.FormInput
            required
            id="estado"
            type="text"
            name="estado"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.FormChild>
          <label htmlFor="cep">CEP: </label>
          <S.FormInput
            required
            id="cep"
            type="tel"
            pattern="[0-9]{5}-[0-9]{3}"
            placeholder="00000-000"
            name="cep"
            onChange={handleChange}
          />
        </S.FormChild>
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
      <S.NavBox>
        <S.Nav to={{ pathname: "/" }}>Voltar</S.Nav>
        <S.Nav to={{ pathname: "/ClientesDB" }}>Clientes cadastrados</S.Nav>
      </S.NavBox>
    </S.ContainerExterno>
  );
}

export default App;
