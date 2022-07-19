import React from "react";

const CardDispositivoComponent = ({ dispositivo }) => {

    return (
        <div className="card">
            <div className="card-body">
                <span>{dispositivo.nombre}, {dispositivo.humedad}, {dispositivo.temperatura}, {dispositivo.fecha}</span>
            </div>
        </div>
    )
}

export default CardDispositivoComponent;