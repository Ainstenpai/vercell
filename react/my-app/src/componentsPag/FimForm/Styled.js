import styled from 'styled-components'

export const FimFrm= styled.div`
.textMontserrat{
    font-family: 'Montserrat', sans-serif;
}
#titleVacina{
    color: #2e9236;
    margin: auto;
    margin-top: 30px;
    text-align: center;
}
#titleForm{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.enviar{
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
    width: 30%;
    cursor: pointer;
    margin-top: 50px;
}
.enviar:hover{
    cursor: pointer;
    background-color: #112b75;
}
@media (max-width:768px) {
    #titleVacina{
        text-align: center;
        font-size: min(32px, 6vw)
    }
    .enviar{
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
        font-size: min(16px, 2vw);
        width: 50%;
        cursor: pointer;
        margin-top: 50px;
    }
}
`;