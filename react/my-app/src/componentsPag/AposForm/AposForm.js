import React from "react";
import { Link } from "react-router-dom";
import agulha from "../../Pages/TrabalhoHtmlCss/src/img/agulha.png";
import { AposFrm } from "./Styled";

export default function Home(){
    return (
        <>
        <AposFrm>
            <div className="textMontserrat" id="titleForm">
                <div className="titleVacina">
                    <h1 id="titleVacina">
                        Formulário para cadastro de vacinação 
                    </h1>
                </div>
        
                <div id="agulha">
                    <img src={agulha}  style={{width: 30 + 'px'}} />
                </div>
            </div>
            <div className="textMontserrat" id="subtitlePag2">
                <h2>
                    Informações complementares
                </h2>
            </div>
            <div className="formularios">
                <form className="inputFormulario">
                    <p id="numberCEP" className="textMontserrat campos-formulario">CEP<span className="starRed">*</span></p>
                    <input type="number" id="inputCep" className="inputs" required/>
        
                    <p id="textBairro" className="textMontserrat campos-formulario">Bairro<span className="starRed">*</span></p>
                    <input type="text" id="inputBairro" className="inputs" required/>
        
                    <p id="textRua" className="textMontserrat campos-formulario">Rua<span className="starRed">*</span></p>
                    <input type="text" id="inputRua" className="inputs" required/>
        
                    <p id="NumeroDaCasa" className="textMontserrat campos-formulario">Número<span className="starRed">*</span></p>
                    <input type="number" id="inputNumero" className="inputs" required/>
                
                    <div id="radioForm">
                        <p id="alergiaDeb" className="textMontserrat campos-formulario">Possui algum tipo de alergia ou debilitação?<span className="starRed">*</span></p>
                        <input type="Radio" id="inputSim" className="textMontserrat" name="opcao" value="Sim" required/> <span className="textMontserrat radiosOptions">Sim</span>
                        <input type="Radio" id="inputNão" className="textMontserrat" name="opcao" value="Não" required/> <span className="textMontserrat radiosOptions">Não</span>
                    </div>  
                
                    <p id="numberOpcaoEscolhida" className="textMontserrat campos-formulario">Se sim, quais?</p>
                    <input type="text" id="inputDebilitacao" className="inputs"/>
                    <button className="enviar" formAction="/FimForm"> 
                        ENVIAR 
                    </button>
                </form>
            </div>
        </AposFrm>
        </>
    )
}