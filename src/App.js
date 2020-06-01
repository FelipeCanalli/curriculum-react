import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./apresentacao";
import Corpo from "./corpo";


function App() {
  return (
    <div className="caixa">
      <div className="texto">
        <Cabecalho />
        <Corpo/>
      </div>
    </div>

  );
}

export default App;
