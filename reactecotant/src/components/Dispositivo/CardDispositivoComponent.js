import React, { useEffect, useState } from "react";
import planta from "../../assets/img/arduino1.png"
import ListaPlantaComponent from "./ListaPlantaComponent";
import { Link } from "react-router-dom";
import { getLastMediciones } from "../../services/MedicionService";


const CardDispositivoComponent = ({ dispositivo, tarjetaDelete, setDispositivoEditado }) => {

    const [mediciones, setMediciones] = useState({})

    const obtenerMediciones = async () => {
        setMediciones(await getLastMediciones())
    }

    useEffect(() => {
        obtenerMediciones()
    }, [])



    const plantas = new Array(9).fill('')


    return (
        <div className="card mb-3 card-dispositivos w-50">
            <div className="card-body">
                <div className="row">
                    {/* <div className="col-1">
                        <img src={planta} height={100} width={100} />
                        <div className="">
                            <i class="fa-solid fa-bed iconos"></i>
                           <div className="btn btn-success"> <i class="fa-solid fa-seedling"></i> </div>
                        </div>

                    </div> */}
                    <div className="col">
                        <div className="d-flex">

                        <i class="fa-solid fa-house mt-2 me-2" ></i>
                        <h3>{dispositivo.nombre}{dispositivo.id}</h3>

                        </div>
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
                        <div className="m-3">

                            <div className="d-flex gap-1">
                                <p className="btn btn-danger">{mediciones.temperatura}°</p>
                                <p className="btn btn-primary">{mediciones.humedad}%</p>
                            </div>
                            <div>
                                <Link class="btn btn-outline-primary" to={"/graficos"} role="button">Ver Graficos</Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDispositivoComponent;