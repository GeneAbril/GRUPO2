import React from "react";
import { Link } from "react-router-dom";
import LogoEcoTank from "../../assets/img/LogoEcoTank.png";
import { exitSession, getSession } from "../../persistencia/dataUsuario";

const HeaderComponent = ({setStateSession, stateSession}) => {
    // localStorage.clear()
    console.log(getSession())
    return (
        <nav className="navbar navbar-light bg-dark p-2">
            <div className="container">
                <Link class="pt-1" to="/">
                    <img src={LogoEcoTank} alt="" width="50" height="50" className="d-inline-block align-top" />
                    <h1 className="ms-3 d-inline-block text-white">EcoTank</h1>
                </Link>

                <Link class="text-decoration-none text-white" to="/">Home</Link>
                <Link class="text-decoration-none text-white" to="/login">Login</Link>
                <Link class="text-decoration-none text-white" to="/register">Register</Link>
                <Link class="text-decoration-none text-white" to="/dispositivos">Dispositivos</Link>
                <Link class="text-decoration-none text-white" to="/graficos">Graficos</Link>
                <Link class="text-decoration-none text-white" to="/comentarios">Comentarios</Link>

                <div className="form-inline my-2 my-lg-0">
                    {
                        stateSession != null ?
                        <div className="d-flex">

                            <div class="form-inline my-2 my-lg-0 dropdown-toggle d-flex">
                                <p class="text-white mt-3 me-3">Usuario</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width="50px" height="50px" alt="" />
                            </div>
                                <button type="button" onClick={() => setStateSession(exitSession())} class="btn-close bg-light" aria-label="Close" ></button>
                        </div>
                            :
                            <div class="form-inline my-2 my-lg-0 dropdown-toggle d-flex">
                                <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Iniciar Sesion</Link>
                            </div>

                    }

                </div>
            </div>
        </nav>
    )
};

export default HeaderComponent;