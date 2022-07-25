import React, { useEffect, useState } from "react";
import planta from "../../assets/img/arduino1.png"
import ListaPlantaComponent from "./ListaPlantaComponent";
import { Link } from "react-router-dom";
import { getLastMediciones } from "../../services/MedicionService";
import ModalPlantaComponent from "./ModalPlantaComponent";


const CardDispositivoComponent = ({ dispositivo, tarjetaDelete, setDispositivoEditado }) => {

    const [mediciones, setMediciones] = useState({})

    const obtenerMediciones = async () => {
        setMediciones(await getLastMediciones())
    }

    useEffect(() => {
        obtenerMediciones()
    }, [])



    const plantas = new Array(4).fill('')


    return (
        <div className="card mb-3 card-dispositivos" style={{ width: '49%' }}>
            <div className="card-body">
                <div className="row">

                    <div className="col-4 d-flex justify-content-center">

                        <div className="m-3">
                            <div className="d-flex">

                                {/* <i class="fa-solid fa-house mt-2 me-2" ></i> */}
                                <h3>{dispositivo.nombre}{dispositivo.id}</h3>

                            </div>
                            <div className="d-flex gap-1">
                                <p className="btn btn-danger">{mediciones.temperatura}°</p>
                                <p className="btn btn-primary">{mediciones.humedad}%</p>
                            </div>
                            <div>
                                <Link class="btn btn-outline-primary w-100" to={"/graficos"} role="button">Graficos <i class="fa-solid fa-chart-line"></i></Link>
                                {/* <Link class="btn btn-outline-primary" to={"/graficos"} role="button">Ver Graficos</Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex align-items-center">
                        <div>
                            {
                                plantas.map((x, i) => <ListaPlantaComponent key={i}/>)
                            }


                            <div className='d-flex justify-content-between'>
                                <div className='mt-3'>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalPlanta" data-bs-whatever="@mdo">Agregar planta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        <ModalPlantaComponent />
                    }
                    <div className="col-1">
                        <button type="button" className="btn-close bg-light" aria-label="Close">
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardDispositivoComponent;