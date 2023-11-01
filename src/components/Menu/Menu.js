import React from "react";
import Logo from '../../assets/img/carflix.png'
import './menu.css'
import ButtonLink from "../Button/ButtonLink";
function Menu(){
    
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="CarFlix Logo"/>
            </a>

            <ButtonLink className="ButtonLink" href="../Form/Form.js">
                Novo video
            </ButtonLink>
        </nav>
    );
}

export default Menu;