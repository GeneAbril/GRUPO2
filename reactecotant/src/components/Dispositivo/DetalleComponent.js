import axios from 'axios';
import React, {useState, useEffects, useEffect}from 'react';
import { getAll,eliminarDispositivo, saveDispositivo } from '../../services/DispositivoService';
import CardDetalleComponent from "./CardDetalleComponent"
import ModalDetalleComponent from './ModalDetalleComponent';

const initialValue = [{
    nombre: 'test1',
    fecha:''
}, {
    nombre: 'test2',
    fecha:''
}]

const DetalleComponent = () =>{

    const eliminarDetalle = () => {

    }

    const saveDetalle = () => {
        
    }

    const [detalle, setDetalle] = useState(initialValue);
    const [detalleEditado, setDetalleEditado] = useState(null);

    const url = 'http://localhost:8080/api/plantas/lista'
    //peticion asincrona
    const llamarPlantas = async () => {
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
    }
    const obtenerDetalle = async() => {
        setDetalle(await llamarPlantas())
 
    }
    
    useEffect(
        ()=>{obtenerDetalle()}
    ,[])

    const tarjetaDelete = async(detalleId) => {
        //espera que traiga la respuesta y actualiza lista de detalles
        await eliminarDetalle(detalleId)
        setDetalle(await getAll())
    }

    const detalleAdd = async(detalle) => {
        await saveDetalle(detalle)
        setDetalle(await getAll())
    }
    
    const detalleEdit = (detalleEditado) => {
        const changeDetalles = detalle.map(detalle => (detalle.key === detalleEditado.key ? detalleEditado : detalle))
        setDetalle(changeDetalles)
    }
    return (
        <div className='container'>
            <h1>detalles</h1>
            <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modaldetalle"
                data-bs-whatever="@mdo">Agregar detalle</button>
            <ModalDetalleComponent/>
            <hr/>
    
            {// recorre el array y crea una tarjeta por cada elemento dentro de este y le entregará el contendido del objeto
                detalle.map((detalle, index) => <CardDetalleComponent 
                key={index} 
                detalle={detalle}
                detalleAdd={detalleAdd}
                detalleEdit={detalleEdit}
                tarjetaDelete={tarjetaDelete} 
                setdetalleEditado={setDetalleEditado}
                />)
            }
    
        </div>
        )
}

export default DetalleComponent;