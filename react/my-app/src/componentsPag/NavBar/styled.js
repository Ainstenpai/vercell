import styled from 'styled-components'

export const NavBar = styled.div`
    background-color: #BBDEFB;
    display: flex;
    justify-content: space-between;
    padding:10px 40px 10px 40px;
    align-items: center;
    #lgoCruz{
        width: 10%
    }
    a {
        text-decoration: none;
        color: #3757b1;
        
    }
    a:hover {
        text-decoration: none;
        color: #193581;
    }
    .textMontserrat{
        font-family: 'Montserrat', sans-serif;
    }
    .headerButton{
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        color: #2b4a9e;
    }
    #formHeading{
        background-color: #BBDEFB;
        display: flex;
        justify-content: space-between;
        padding:10px 40px 10px 40px;
        align-items: center
    }
    #imgCRUZ{
        margin-left: 10px;
        margin-bottom: 10px;
        margin-top: 4px;
        width:30px; 
        height:30px;
    }
    @media (max-width:768px){
        h1{
            font-size: min(22px, 4vw);
        }
    }
`;