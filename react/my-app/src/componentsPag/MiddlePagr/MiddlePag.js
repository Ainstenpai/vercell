import React from "react";
import { Link } from "react-router-dom";
import { MdlPag } from "./Styled";
export default function Home(){
    return (
        <>
        <MdlPag>
            <div className="textMontserrat" id="titleForm">
                <div className="titleVacina">
                    <h1 id="titleVacina">
                        Cadastro
                    </h1>
                    <hr style={{width: 100 + '%' }}/>
                </div>
            </div>
            <div className="textMontserrat">
                <h2>
                    <u>Para iniciar o processo</u>
                </h2>
                <p id="textSobre">
                    Esteja com os seguintes documentos em mãos:
                </p>
            </div>
            <div>
                <ul className="textMontserrat">
                    <li>
                        RG
                    </li>
                    <li>
                        CPF
                    </li>
                    <li>
                        CARTEIRA DE VACINAÇÃO
                    </li>
                    <li>
                        SEU ENDEREÇO (Caso não saiba)
                    </li>
                    <li>
                        OVO DE PÁSCOA DO BOTAFOGO
                    </li>
                </ul>
            </div>
            <form >
                <div className="textMontserrat">
                    <input type="checkbox" required /> Estou com todos os documentos em mãos
                </div>
                <div>
                    <button className="enviar" formAction="/Form">
                      Começar 
                    </button>
                </div>
            </form>
        </MdlPag>
        </>
    )
}