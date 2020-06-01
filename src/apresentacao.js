import React from "react";
import foto from "./foto.png"

function Cabecalho() {
  return (
    <div id="cabecalho">
      <div>
      <img src={foto}/>
      </div>
      <div >
      <h1> FELIPE GALVÃO CANALLI DE SOUZA </h1>
      <p>Brasileiro, solteiro, 17 anos</p>
      <p>
      GitHub: <a href="https://github.com/FelipeGalvao1">github.com/FelipeGalvao1</a>
      </p>
      <p>Fones: 98887-4432 / 99926-2944 / 2045-2330 </p>
      <p>
        Email: <a href="mailto:exemplo@email.com">exemplo@email.com</a>
      </p>
      <p>Rua Honório Emiliano Bueno Nº 444, Ponte Rasa, São Paulo - SP</p>
      <p>CEP: 03884-100.</p>
      </div>
    </div>
  );
}
export default Cabecalho;
