import styled from 'styled-components'

export const MdlPag = styled.div`
#titleVacina{
    color: #3757b1;
    margin: auto;
    display: flex;
}
#titleForm{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
#imgCRUZ{
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 4px;
    width:30px; 
    height:30px;
}
h2{
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 22px;
}
#textSobre{
    margin-top: 5px;
    margin-bottom: 20px;
}
#zoa{
    margin-top: 10px;
    margin-bottom: 40px;
    color: #e0e0e0;
    font-size: 10px;
    text-transform: uppercase;
}
#cadastro{
    margin-bottom: 0;
}
ul{
    padding-left: 20px;
    margin-top: 5px;
}
li{
    margin-bottom: 10px;
}
form{
    margin-top: 50px;
}
.enviar{
    background-color: #3757b1;
    color: #FFFFFF;
    height: 55px;
    border: none;
    border-radius: 30px;
    margin: auto;
    font-family: 'Prosto One', sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    width: 20%;
    cursor: pointer;
    margin-top: 20px;
}
.enviar:hover{
    cursor: pointer;
    background-color: #112b75;
}
.textMontserrat{
    font-family: 'Montserrat', sans-serif;
}
@media (max-width:768px){
    #titleForm{
        width: 100%;
        justify-content: center;
        font-size: min(24px, 3vw);

    }
    h2{
        font-size: min(22px, 4vw);
        text-align: center;
    }
    #textSobre{
        text-align: center;
        font-size: min(16px, 3vw);
    }
    li{
        font-size: min(16px, 3vw);
    }
    .enviar{
        width:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: min(16px, 3vw);
    }
}
`;