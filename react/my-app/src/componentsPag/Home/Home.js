import React from "react";
import { Link } from "react-router-dom";
import { HomePag } from "./Styled";

export default function Home(){
    return (
        <>
            <HomePag>
                <div className="textMontserrat" id="titleForm">
                    <div className="titleVacina">
                        <h1 id="titleVacina">
                            Site oficial de vacinação contra covid-19
                        </h1>
                        <hr style={{width: 100 + '%' }}/>
                    </div>
                </div>
                <div className="textMontserrat">
                    <h2>
                        <u>Sobre nós</u>
                    </h2>
                    <p id="textSobre">
                        Somos alunos estágiarios de enfermagem coletando dados dos pacientes para aplicação da vacina do COVID-19. Nós pagamos essa página pra outro estágiario de T.i e saiu desse jeito ai.
                    </p>
                    <p id="zoa">
                        Na verdade isso é uma simulação de página, quase enganei vocês. da nota 10 ai Ben Tennyson kkkkkk
                    </p>
                </div>
                <div>
                    <p className="textMontserrat" id="cadastro">
                        Para iniciar seu cadastro, clique na opção "Cadastro" abaixo:
                    </p>
                </div>
                <div>
                    <ul className="textMontserrat">
                        <li>
                            <Link to="/MiddlePage">
                                Cadastro
                            </Link>
                        </li>
                    </ul>
                </div>
            </HomePag>
        </>
    )
}