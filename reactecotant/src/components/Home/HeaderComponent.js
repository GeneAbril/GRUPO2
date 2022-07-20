import React from "react";
import { Link } from "react-router-dom";
import LogoEcoTank from "../../assets/img/LogoEcoTank.png";

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-light bg-dark p-2">
            <div className="container">
                <Link class="pt-1" to="/">
                    <img src={LogoEcoTank} alt="" width="50" height="50" className="d-inline-block align-top" />
                    <h1 className="ms-3 d-inline-block text-white">EcoTank</h1>
                </Link>

                <Link class="text-decoration-none text-white" to="/">Home</Link>
                <Link class="text-decoration-none text-white" to="/comentarios">Comentarios</Link>
                <Link class="text-decoration-none text-white" to="/graficos">Graficos</Link>
                <Link class="text-decoration-none text-white" to="/login">Login</Link>
                <Link class="text-decoration-none text-white" to="/register">Register</Link>
                <Link class="text-decoration-none text-white" to="/dispositivos">Dispositivos</Link>

                <div className="form-inline my-2 my-lg-0">
                    <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Iniciar Sesion</Link>
                </div>
            </div>
        </nav>
    )
};

export default HeaderComponent;