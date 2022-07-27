import React, { useState, useEffect } from 'react';
import { getSession } from '../../persistencia/dataUsuario';
import { getAll, eliminarDispositivo, saveDispositivo } from '../../services/DispositivoService';
import CardDispositivoComponent from "./CardDispositivoComponent"
import ModalDispositivoComponent from './ModalDispositivoComponent';



const DispositivoComponent = () => {

    const [dispositivos, setDispositivos] = useState(null);


    const userActual = getSession();
    console.log('userActual', userActual)

    //Funcion para obtener dispositivos
    const obtenerDispisitivos = async () => {
        setDispositivos(await getAll(userActual.id))
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
        setDispositivos(await getAll(userActual.id))
    }


    const dispositivoAdd = async (dispositivo) => {
        await saveDispositivo(dispositivo, userActual.id)
        setDispositivos(await getAll(userActual.id))
    }


    return (
        <div className='container my-3' style={{ height: '120vh' }}>
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
                            tarjetaDelete={tarjetaDelete}
                        />)
                        :
                        <div className='d-flex justify-content-center mx-auto'>
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

