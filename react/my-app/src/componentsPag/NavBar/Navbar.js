import React from "react";
import { Link } from "react-router-dom";
import pngwing from "../../Pages/TrabalhoHtmlCss/src/img/pngwing.png"
import { NavBar } from "./styled";

export default function navbar(){
    return (
        <NavBar>
            
                <div id="lgoCruz">
                    <Link to='ReactApp/'>
                        <img  src={ pngwing } style={{width: 100 + '%', }}/>
                    </Link>
                </div>
                <div className="textMontserrat headerButton">
                    <Link to='ReactApp/'>
                        <h1>Home</h1>   
                    </Link>
                </div>
                <div className="textMontserrat headerButton">
                    <Link to='/MiddlePage'>
                        <h1>Cadastro</h1>   
                    </Link>
                </div>
        </NavBar>
    )
}