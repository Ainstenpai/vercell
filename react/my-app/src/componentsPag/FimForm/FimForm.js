import React from "react";
import { Link } from "react-router-dom";
import { FimFrm } from "./Styled";
export default function Home(){
    return (
        <>
        <FimFrm>
            <div>
                <div className="textMontserrat" id="titleForm">
                    <div className="titleVacina">
                        <h1 id="titleVacina">
                            Formulário enviado, aguarde nosso e-mail de confirmação
                        </h1>
                    </div>
                </div>
                <form>
                    <button className="enviar" formAction="ReactApp/"> 
                        ENVIAR 
                    </button>
                </form>
            </div>
        </FimFrm>
        </>
    )
}