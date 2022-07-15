import React from "react";
import LogoEcoTank from "../assets/img/LogoEcoTank.png";

const HeaderComponent = () => {
    return(
        <nav class="navbar navbar-light bg-dark mb-5 p-2">
            <div class="container">
                <a class="navbar-brand text-white d-flex" href="index.html">
                <img src={LogoEcoTank} alt="" width="50" height="50" class="d-inline-block align-top"/>
                <h1 class="ms-3">EcoTank</h1>
                </a>

            <div class="form-inline my-2 my-lg-0">
                <a class="btn btn-outline-success my-2 my-sm-0" href="login.html">Iniciar Sesion</a>
            </div>
        </div>
    </nav>
    )
};

export default HeaderComponent;