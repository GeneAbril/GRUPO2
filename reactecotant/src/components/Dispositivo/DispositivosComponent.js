import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getAll, eliminarDispositivo, saveDispositivo } from '../../services/DispositivoService';
import CardDispositivoComponent from "./CardDispositivoComponent"
import ModalDispositivoComponent from './ModalDispositivoComponent';

//array con 2 objetos
const initialValue = [{
    id: 1,
    nombre: 'test1',
    temperatura: false,
    humedad: true,
    fecha: ''
}, {
    id: 2,
    nombre: 'test2',
    temperatura: true,
    humedad: false,
    fecha: ''
}]

const DispositivoComponent = () => {

    const [dispositivos, setDispositivos] = useState(null);
    const [dispositivoEditado, setDispositivoEditado] = useState(null);


    //Funcion para obtener dispositivos
    const obtenerDispisitivos = async () => {
        setDispositivos(await getAll())
    }

    //Cuando se recarga la pagina va a hacer una vez lo que hay dentro, en este caso hacer la funcion Obtener dispositivo
    useEffect(
        () => {
            setTimeout(() => {
                obtenerDispisitivos()
            }, 500);

        }
        , [])

    const tarjetaDelete = async (dispositivoId) => {
        //espera que traiga la respuesta y actualiza lista de dispositivos
        await eliminarDispositivo(dispositivoId)
        setDispositivos(await getAll())
    }

    const dispositivoAdd = async (dispositivo) => {
        await saveDispositivo(dispositivo)
        setDispositivos(await getAll())
    }

    const dispositivoEdit = (dispositivoEditado) => {
        const changeDispositivos = dispositivos.map(dispositivo => (dispositivo.key === dispositivoEditado.key ? dispositivoEditado : dispositivo))
        setDispositivos(changeDispositivos)
    }





    return (
        <div className='container' style={{height:'120vh'}}>
            <div className='d-flex justify-content-between'>
                <h1>Dispositivos</h1>
                <div className='mt-3'>
                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalDispositivo" data-bs-whatever="@mdo">Agregar dispositivo</button>
                </div>
            </div>
            <ModalDispositivoComponent
                dispositivoAdd={dispositivoAdd}
            />
            <hr />
            <div className='d-flex justify-content-between flex-wrap'>
                {// recorre el array y crea una tarjeta por cada elemento dentro de este y le entregará el contendido del objeto

                    dispositivos ?
                        dispositivos.map((dispositivo, index) => <CardDispositivoComponent
                            key={index}
                            dispositivo={dispositivo}
                            dispositivoAdd={dispositivoAdd}
                            dispositivoEdit={dispositivoEdit}
                            tarjetaDelete={tarjetaDelete}
                            setDispositivoEditado={setDispositivoEditado}
                        />)
                        :
                        <div className='d-flex justify-content-center my-auto'>
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default DispositivoComponent;

