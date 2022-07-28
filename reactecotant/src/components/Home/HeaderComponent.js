import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoEcoTank from "../../assets/img/LogoEcoTank.png";
import { exitSession, getSession } from "../../persistencia/dataUsuario";

const HeaderComponent = ({ setStateSession, stateSession }) => {
    // localStorage.clear()
    console.log(getSession())

    const sessionActual = getSession();


    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-light bg-dark p-2">
                <div className="col-1"></div>
                <div className="col-2">
                    <Link class="pt-1" to="/">
                        <img src={LogoEcoTank} alt="" width="50" height="50" className="d-inline-block align-top" />
                        <h1 className="ms-3 d-inline-block text-white">EcoTank</h1>
                    </Link>
                </div>

                <div className="col">
                    {
                        stateSession != null ?
                            [
                            // <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/login">Login</Link>, 
                            // <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/register">Register</Link>, 
                            <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/dispositivos">Dispositivos</Link>, 
                            // <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/graficos">Graficos</Link>, 
                            // <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/comentarios">Comentarios</Link>
                            ]
                            :
                            [<Link className="btn text-decoration-none text-white me-3 nav-hover" to="/">Home</Link>,
                            <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/precios">Precios</Link>,
                            <Link className="btn text-decoration-none text-white me-3 nav-hover" to="/nosotros">Nosotros</Link>]

                }
                </div>

                <div className="col-2">
                    {
                        stateSession != null ?
                            <div className="d-flex">

                                <div className="d-flex">
                                    <p className="text-white mt-3 me-3">{sessionActual.nombre}</p>
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width="50px" height="50px" alt="" />
                                </div>
                                <button type="button" onClick={() => { setStateSession(exitSession()); navigate('/login') }} className="btn-close mt-3 ms-3 bg-secondary" aria-label="Close" ></button>
                            </div>
                            :
                            <div className="d-flex">
                                <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Iniciar Sesion</Link>
                            </div>

                    }

                </div>
        </nav>
    )
};

export default HeaderComponent;