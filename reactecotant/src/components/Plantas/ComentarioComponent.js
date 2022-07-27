import React,{useState,useCallBack} from "react";
import AgregarComentarioComponent from "./AgregarComentarioComponent";
import TarjetaComentario from "./TarjetaComentario";
import TarjetaPlantaComponents from "./TarjetaPlantaComponents";
import '../../styleComentario.css';
import { Link, useNavigate } from "react-router-dom";

const initialComentarios = [
        {
            key:0,
            comentario:''
        },
        {
            key:1,
            comentario:'esto es una prueba'
        },
        {
            key:2,
            comentario:'trabajando para usted'
        },
        {
            key:0,
            comentario:''
        },
        {
            key:1,
            comentario:'esto es una prueba'
        },
        {
            key:2,
            comentario:'trabajando para usted'
        },
        {
            key:0,
            comentario:''
        },
        {
            key:1,
            comentario:'esto es una prueba'
        },
        {
            key:2,
            comentario:'trabajando para usted'
        },
        {
            key:0,
            comentario:''
        },
        {
            key:1,
            comentario:'esto es una prueba'
        },
        {
            key:2,
            comentario:'trabajando para usted'
        },
        {
            key:0,
            comentario:''
        },
        {
            key:1,
            comentario:'esto es una prueba'
        },
        {
            key:2,
            comentario:'trabajando para usted'
        },
        {
            key:0,
            comentario:''
        },
        {
            key:1,
            comentario:'esto es una prueba'
        },
        {
            key:2,
            comentario:'trabajando para usted'
        }
    
    ]

const planta={
    key:0,
    nombre:'prueba'
}
const ComentarioComponent = () => {

    const [comentarios, setComentarios] = useState(initialComentarios);
    const[comentarioEditado, setComentarioEditado] = useState(null);
    const[planta, setPlanta] = useState(null);


    return(
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <h1>Detalles Planta:</h1>
                <div className='mt-3'>
                    <Link class="btn btn-outline-warning" to="/dispositivos" role="button">Volver</Link>
                </div>
            </div>
                <hr/>
                <div className='row m-0  p-2 fijarPlanta'>
                    <TarjetaPlantaComponents planta= {planta}/>
                </div>
                <h1>Comentarios:</h1>
                <hr/>
                <div className='row mt-3 border'>
                    <AgregarComentarioComponent comentarioEditado = {comentarioEditado}/>
                </div>
                <div className = 'row fijar border border-2 rounded bg-light' >
                    
                    <div className="row mb-5" >
                    
                        {
                        comentarios.map(carta => 
                        <TarjetaComentario
                        key={carta.key} 
                        comentario = {carta.comentario}/>)
                        }
                    
                    </div> 
                </div>               
                
        </div>            
            
    

    )
}
export default ComentarioComponent;