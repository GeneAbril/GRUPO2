import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { getAll,eliminarDispositivo, saveDispositivo } from '../../services/DispositivoService';
import CardDispositivoComponent from "./CardDispositivoComponent"
import ModalDispositivoComponent from './ModalDispositivoComponent';

//array con 2 objetos
const initialValue = [{
    nombre: 'test1',
    temperatura: false,
    humedad: true,
    fecha:''
}, {
    nombre: 'test2',
    temperatura: true,
    humedad: false,
    fecha:''
}]

const DispositivoComponent = () => {

const [dispositivos, setDispositivos] = useState(initialValue);
const [dispositivoEditado, setDispositivoEditado] = useState(null);

const url = 'http://localhost:8080/api/dispositivos/lista'
//peticion asincrona
const llamarDispositivos = async () => {
    const response = await axios.get(url)
    console.log(response.data)
    return response.data
}

//Funcion para obtener dispositivos
const obtenerDispisitivos = async() => {
    setDispositivos(await llamarDispositivos())
}

//Cuando se recarga la pagina va a hacer una vez lo que hay dentro, en este caso hacer la funcion Obtener dispositivo
useEffect(
    ()=>{obtenerDispisitivos()}
,[])

const tarjetaDelete = async(dispositivoId) => {
    //espera que traiga la respuesta y actualiza lista de dispositivos
    await eliminarDispositivo(dispositivoId)
    setDispositivos(await getAll())
}

const dispositivoAdd = async(dispositivo) => {
    await saveDispositivo(dispositivo)
    setDispositivos(await getAll())
}

const dispositivoEdit = (dispositivoEditado) => {
    const changeDispositivos = dispositivos.map(dispositivo => (dispositivo.key === dispositivoEditado.key ? dispositivoEditado : dispositivo))
    setDispositivos(changeDispositivos)
}





return (
    <div className='container'>
        <h1>Dispositivos</h1>
        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalDispositivo"
            data-bs-whatever="@mdo">Agregar dispositivo</button>
        <ModalDispositivoComponent/>
        <hr/>

        {// recorre el array y crea una tarjeta por cada elemento dentro de este y le entregará el contendido del objeto
            dispositivos.map((dispositivo, index) => <CardDispositivoComponent 
            key={index} 
            dispositivo={dispositivo}
            dispositivoAdd={dispositivoAdd}
            dispositivoEdit={dispositivoEdit}
            tarjetaDelete={tarjetaDelete} 
            setDispositivoEditado={setDispositivoEditado}
            />)
        }

    </div>
    )
}

export default DispositivoComponent;

