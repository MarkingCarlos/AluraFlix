import React,  { useState } from "react";
import './Form.css'
import '../Menu/Menu'
import ButtonLink from "../Button/ButtonLink";
import App from "../../App";

function Form (){

    const [opcoes] = useState(["Back-End", "Front-End", "Projetos"]);
  
    return(
        <div>
            <App/>
        <form className="Content">
            <div className="form-container">
                <h1>Cadastro de video</h1>
                <input  type="text" placeholder="Nome"/>

                <input type="text" placeholder="Descrição"/>

                <select>
                    {opcoes.map((opcao, index) => (
                    <option key={index} value={opcao}>
                        {opcao}
                    </option>
                    ))}
                </select>
                <ButtonLink className="ButtonLink">
                    Adicionar Video
                </ButtonLink>
            </div>

        </form>
        </div>
    );
}



export default Form;