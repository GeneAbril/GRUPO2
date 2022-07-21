import React from "react";
import planta from "../../assets/img/corona.png"
import ListaPlantaComponent from "./ListaPlantaComponent";
import { Link } from "react-router-dom";


const CardDispositivoComponent = ({ dispositivo, tarjetaDelete, setDispositivoEditado }) => {

    const plantas = new Array(3).fill('')


    return (
        <div className="card mb-3 card-dispositivos">
            <div className="card-body">
                <div className="row">
                    <div className="col-1">
                        <img src={planta} height={100} width={100} />

                    </div>
                    <div className="col-2">
                        <h1>{dispositivo.nombre}{dispositivo.id}</h1>
                        {/*<div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Temperatura</label>
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={dispositivo.temperatura} /> 
                        </div>
                        
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Humedad</label>
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={dispositivo.humedad} /> 
                        </div>*/}

                        {/* <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>setDispositivoEditado(dispositivo)}>Editar</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => tarjetaDelete(dispositivo.id)}>Eliminar</button>
                    */}
                    </div>
                    <div className="col-2">
                        <div className="d-flex">
                            <h1>30°</h1>
                            <h1>50%</h1>
                        </div>
                        <div>
                        <Link class="btn btn-primary"to={"/graficos"} role="button">Graficos</Link>                        </div>
                    </div>
                    <div className="col">
                        <table class="table table-success row fs-2">
                            <tbody>
                                <tr>
                                    {
                                        plantas.map((planta, i) =>

                                            <ListaPlantaComponent />

                                        )
                                    }
                                </tr>

                                {/* <tr>  
                            <th scope="col">Planta 1</th>
                            <td> <a href="plantas.html" class="btn btn-success">Ver</a></td>
                            <th scope="col">Planta 2</th>
                            <td><a href="plantas.html" class="btn btn-success">Ver</a></td>
                   
                            <th scope="col">Planta 3</th>
                            <td><a href="plantas.html" class="btn btn-success">Ver</a></td>
                            <th scope="col">Planta 4</th>
                            <td><a href="v" class="btn btn-success">Ver</a></td>
                        </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDispositivoComponent;