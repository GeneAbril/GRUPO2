import React from "react";
import '../../styleComentario.css';

const TarjetaComentario = ({ planta }) => {

    return (
        <div className="col  stylePlanta">
            <div className="card   m-2 p-2">
                <div className="card-body ">

                    <h3 className="card-title m-1 p-1">{planta}</h3>
                    <p>pruebas</p>
                    <div className="d-flex justify-content-end">
                    </div>
                </div>
            </div>
        </div>)
}
export default TarjetaComentario;