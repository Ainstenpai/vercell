import React from "react";
import { Link } from "react-router-dom";
import agulha from "../../Pages/TrabalhoHtmlCss/src/img/agulha.png";
import { Frm } from "./Styled";

export default function Form(){
    return (
        <>
        <Frm>
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
                    Informações pessoais
                </h2>
            </div>
            <div className="formularios">
                <form className="inputFormulario">
                    <p id="name" className="textMontserrat campos-formulario">Nome<span className="starRed">*</span></p>
                    <input type="text" id="inputName" className="inputs" required />

                    <p id="number" className="textMontserrat campos-formulario">Idade<span className="starRed">*</span></p>
                    <input type="number" id="inputNumber" className="inputs" required/>

                    <p id="numberCPF" className="textMontserrat campos-formulario">CPF<span className="starRed">*</span></p>
                    <input type="number" id="inputNumber2" className="inputs" required/>

                    <p id="Email" className="textMontserrat campos-formulario">E-mail<span className="starRed">*</span></p>
                    <input type="Email" id="inputEmail" className="inputs" required/>

                    <p id="carteira" className="textMontserrat campos-formulario">Carteira de vacinação (frente e verso)<span className="starRed">*</span></p>
                    <input type="file" id="inputvalidacao" className="inputs" multiple required/>

                    <p id="validacao" className="textMontserrat campos-formulario">Estado<span className="starRed">*</span></p>
                    <select id="estado" name="estado" className="inputs">
                        <option defaultValue disabled>Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                    <div id="check">
                        <input type="checkbox" required/>
                        <p className="textMontserrat">&nbsp;Concordo com os termos...</p>
                    </div>
                    <button className="enviar" formAction="/AposForm"> 
                        ENVIAR 
                    </button>
                </form>
            </div>
        </Frm>
        </>
    )
}