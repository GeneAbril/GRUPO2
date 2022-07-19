import React from "react";
import { Link } from "react-router-dom";
import LogoEcoTank from "../assets/img/LogoEcoTank.png";

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-light bg-dark mb-5 p-2">
            <div className="container">
                <Link to="/">
                    <img src={LogoEcoTank} alt="" width="50" height="50" className="d-inline-block align-top" />
                    <h1 className="ms-3">EcoTank</h1>
                </Link>

                <Link to="/">Home</Link>
                <Link to="/comentarios">Comentarios</Link>
                <Link to="/graficos">Graficos</Link>
                <Link to="/login">Login</Link>
                <Link to="/dispositivos">Dispositivos</Link>

                <div className="form-inline my-2 my-lg-0">
                    <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Iniciar Sesion</Link>
                </div>
            </div>
        </nav>
    )
};

export default HeaderComponent;