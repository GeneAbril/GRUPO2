import React from "react";
import planta from "../../assets/img/corona.png"
import HomeComponent from "../Home/HomeComponent";

const CardDispositivoComponent = ({ dispositivo, tarjetaDelete, setDispositivoEditado }) => {

    return (
        <div className="card mb-3 card-dispositivos">
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        <img src={planta} height={100} width={100} />

                    </div>
                    <div className="col">
                        <h1>{dispositivo.nombre}{dispositivo.id}</h1>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Temperatura</label>
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={dispositivo.temperatura} /> 
                        </div>
                        
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Humedad</label>
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={dispositivo.humedad} /> 
                        </div>
                        
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

export default CardDispositivoComponent;