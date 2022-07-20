import React from "react";
import planta from "../../assets/img/corona.png"
import HomeComponent from "../Home/HomeComponent";

const CardDetalleComponent = ({dispositivo}) => {

    return (
        <div className="card mb-3 card-detalles">
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        <img src={planta} height={100} width={100} />

                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>setDispositivoEditado(dispositivo)}>Editar</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => tarjetaDelete(dispositivo.id)}>Eliminar</button>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetalleComponent;