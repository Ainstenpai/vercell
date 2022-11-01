import styled from 'styled-components'

export const HomePag = styled.div`
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
.textMontserrat{
    font-family: 'Montserrat', sans-serif;
}
h2{
    margin-bottom: 0;
    font-weight: 600;
    font-size: 22px;
}
#textSobre{
    margin-top: 15px;
    margin-bottom: 0px;
    font-size: min(18px, 1.5vw)
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
a {
    text-decoration: none;
    color: #3757b1;
    
}
a:hover {
    text-decoration: none;
    color: #193581;
}
@media (max-width:768px){
    h2{
        text-align: center;
        font-size: min(22px, 4vw);

    }
    #titleForm{
        font-size: min(24px, 3vw);
        justify-content: center;
        text-align: center;
    }
    #textSobre{
        text-align: center;
        font-size: min(16px, 3vw)
    }
    #zoa{
        text-align: center;
    }
    #cadastro{
        text-align: center;
        font-size: min(16px, 3vw);
    }
    ul{
        padding: 0;
        margin-top: 5px;
        list-style: none;
        text-align: center;
        margin-top: 20px;
        font-size: min(16px, 3vw);
        
    }
}
`;