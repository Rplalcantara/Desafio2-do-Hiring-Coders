import React from "react";
import * as S from "./style";

function App() {
  let checklocal = JSON.parse(localStorage.getItem("Clientes"));
  let clientesSavedDB = checklocal === null ? [] : checklocal;

  return (
    <S.ContainerExterno>
      <S.Header>Clientes:</S.Header>
      <S.ContainerCliente>
        {clientesSavedDB.map((cliente) => (
          <S.Cliente key={cliente.ID}>
            <S.ClienteName>{cliente.nome} {cliente.sobrenome}</S.ClienteName>
            <S.EnderecoContainer>
            <S.ClienteEndereco>{cliente.endereco}</S.ClienteEndereco>
            <S.ClienteCisEst>{cliente.cidade} - {cliente.estado}</S.ClienteCisEst>
            <S.ClienteCep>CEP: {cliente.cep}</S.ClienteCep>
            </S.EnderecoContainer>
            <S.ClienteID>ID: {cliente.ID}</S.ClienteID>
          </S.Cliente>          
        ))}
      </S.ContainerCliente>
      <S.Nav to={{ pathname: "/Clientes" }}>Voltar</S.Nav>
    </S.ContainerExterno>
  );
}

export default App;
