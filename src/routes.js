import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home"
import Clientes from "./Clientes"
import Produtos from "./Produtos"
import Estoque from "./Estoque"
import ClientesDB from "./ClientesDB"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Clientes" exact component={Clientes} />
        <Route path="/Produtos" exact component={Produtos} />
        <Route path="/Estoque" exact component={Estoque} />
        <Route path="/ClientesDB" exact component={ClientesDB} />
      </Switch>
    </BrowserRouter>
  );
}