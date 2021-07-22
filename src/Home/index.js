import React from "react";
import * as S from "./style";

function App() {
    return(
    <S.ContainerExterno>
        <S.Header>O que deseja cadastrar?</S.Header>
        <S.Button to={{pathname: "/Clientes"}}>Cliente</S.Button>
        <S.Button to={{pathname: "/Produtos"}}>Produto</S.Button>
    </S.ContainerExterno>
    )}

export default App