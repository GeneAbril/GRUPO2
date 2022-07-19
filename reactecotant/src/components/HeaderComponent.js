import React from "react";
import { Link } from "react-router-dom";
import LogoEcoTank from "../assets/img/LogoEcoTank.png";

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-light bg-dark mb-5 p-2">
            <div className="container">
                <Link to="/"><a className="navbar-brand text-white d-flex">
                    <img src={LogoEcoTank} alt="" width="50" height="50" className="d-inline-block align-top" />
                    <h1 className="ms-3">EcoTank</h1>
                </a></Link>

                <Link to="/">Home</Link>
                <Link to="/comentarios">Comentarios</Link>
                <Link to="/graficos">Graficos</Link>
                <Link to="/login">Login</Link>

                <div className="form-inline my-2 my-lg-0">
                    <a className="btn btn-outline-success my-2 my-sm-0" href="login.html">Iniciar Sesion</a>
                </div>
            </div>
        </nav>
    )
};

export default HeaderComponent;