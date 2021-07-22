import React from "react";
import * as S from "./style";

function App() {
  let checklocal = JSON.parse(localStorage.getItem("Produtos"));
  let produtosSavedDB = checklocal === null ? [] : checklocal;

  return (
    <S.ContainerExterno>
      <S.Header>Estoque:</S.Header>
      <S.ContainerItem>
        {produtosSavedDB.map((prod) => (
          <S.Item key={prod.ID}>
            <S.ItemName>{prod.nome}</S.ItemName>
            <S.ItemImg
              src="https://via.digital.com/250/ffffff/000000"
              alt="Placeholder"
            ></S.ItemImg>
            <S.ItemDesc>{prod.descricao}</S.ItemDesc>
            <S.ItemPrice>R${prod.preco}</S.ItemPrice>
            <S.ItemQt>Qtd: {prod.quantidade}</S.ItemQt>
          </S.Item>
        ))}
      </S.ContainerItem>
      <S.Nav to={{ pathname: "/Produtos" }}>Voltar</S.Nav>
    </S.ContainerExterno>
  );
}

export default App;
