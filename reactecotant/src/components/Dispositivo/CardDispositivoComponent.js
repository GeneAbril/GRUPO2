import React, { useEffect, useState } from "react";
import ListaPlantaComponent from "./ListaPlantaComponent";
import { Link } from "react-router-dom";
import { getLastMediciones } from "../../services/MedicionService";
import ModalPlantaComponent from "./ModalPlantaComponent";
import { getAllPlantas, savePlanta } from "../../services/PlantaService";


const CardDispositivoComponent = ({ dispositivo, tarjetaDelete }) => {
    console.log('DISPOSITIVO ID:', dispositivo.id)
    const [mediciones, setMediciones] = useState({})
    const [plantas, setPlantas] = useState(null)
    
    const obtenerPlantas = async () => {
        setPlantas(await getAllPlantas(dispositivo.id))
    }

    const obtenerMediciones = async () => {
        setMediciones(await getLastMediciones())
    }

    useEffect(() => {
        obtenerMediciones()
        obtenerPlantas()
    }, [])

    //PlantaAdd
    const plantaAdd = async (planta) => {
        await savePlanta(planta, dispositivo.id)
        setPlantas(await getAllPlantas(dispositivo.id))
    }

    // const plantas = new Array(4).fill('')


    return (
        <div className="card mb-3 card-dispositivos" style={{ width: '49%' }}>
            <div className="card-body">
                <div className="row">

                    <div className="col-4 d-flex justify-content-center">

                        <div className="m-3">
                            <div className="d-flex">

                                {/* <i class="fa-solid fa-house mt-2 me-2" ></i> */}
                                <h3>{dispositivo.id} {dispositivo.nombre}</h3>

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
                                plantas &&
                                plantas.map((x, i) => <ListaPlantaComponent key={i}/>)
                            }


                            <div className='d-flex justify-content-between'>
                                <div className='mt-3'>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={"#modalPlanta" + dispositivo.id} data-bs-whatever="@mdo">Agregar planta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        <ModalPlantaComponent plantaAdd={plantaAdd} dispositivoId={dispositivo.id}/>
                    }
                    <div className="col-1">
                        <button type="button" className="btn-close bg-light" onClick={() => tarjetaDelete(dispositivo.id)} aria-label="Close">
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardDispositivoComponent;