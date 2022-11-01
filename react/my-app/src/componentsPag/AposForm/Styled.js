import styled from 'styled-components'

export const AposFrm= styled.div`
.textMontserrat{
    font-family: 'Montserrat', sans-serif;
}
#titleVacina{
    color: #3757b1;
    margin: auto;
}
#titleForm{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
h2{
    font-weight: 400;
    color: #3757b1;
}
#subtitlePag2{
    display: flex;
    justify-content: center;
}
#agulha{
    margin-left: 10px;
    margin-right: 5px;
}

.formularios{
    width: 40%;
    margin: auto;
    margin-top: 30px;
}
.inputFormulario{
    margin: auto;
    border-radius: 5px;
    opacity: 1;
    display: flex;
    flex-direction: column;
}
.starRed{
    color: red;
}
.campos-formulario{
    margin: 5px 0;
    color: #2b4a9e;
    font-weight: 500;
}
.inputs{
    background-color:#e8ebfd;
    border-radius: 5px;
    height: 52px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #000000;
    margin-bottom: 6px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 400;
}
#radioForm{
    margin: 15px 0;
}
.radiosOptions{
    font-weight: 500;
    color: #2b4a9e;
}
#enviar{
    background-color: #3757b1;
    color: #FFFFFF;
    height: 55px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    border-radius: 30px;
    margin: auto;
    font-family: 'Prosto One', sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    width: 45%;
    cursor: pointer;
    margin-top: 15px;
}
#enviar:hover{
    cursor: pointer;
    background-color: #112b75;
}
@media (max-width:768px){
    #titleVacina{
        text-align: center;
        font-size: min(28px, 4vw);
    }
    #subtitlePag2{
        font-size: min(22px, 3vw);
    }
    .formularios{
        width: 90%;
    }
    .campos-formulario{
        font-size: min(22px, 3vw);
    }
    #enviar{
        width: 70%;
        font-size: min(16px, 3vw);
    }
}
`;