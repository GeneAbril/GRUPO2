import React from "react";
import '../../styleComentario.css';

const TarjetaComentario = ({ key, comentario }) => {
        return (
                <div className="col ">
                        <div className="card  d-inline-block m-1 p-0 styleComentario">
                                <div className="card-body ">
                                        <h3 className="card-title m-1 p-1">{comentario} {key}</h3>
                                        <p>pruebas</p>
                                        <div className="d-flex justify-content-end">
                                        </div>
                                </div>
                        </div>
                </div>)
}
export default TarjetaComentario;