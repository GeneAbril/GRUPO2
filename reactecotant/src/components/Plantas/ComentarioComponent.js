import React,{useState,useCallBack} from "react";
import AgregarComentarioComponent from "./AgregarComentarioComponent";
import TarjetaComentario from "./TarjetaComentario";
import TarjetaPlantaComponent from "./TarjetaPlantaComponent";
import '../../styleComentario.css';


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
const ComentarioComponent = () => {

    const [comentarios, setComentarios] = useState(initialComentarios);
    const[comentarioEditado, setComentarioEditado] = useState(null);
    const[planta, setPlanta] = useState(null);


    return(
        <div className="container mt-5 ">
                <div className='row m-0 border'>
                    <TarjetaPlantaComponent planta= {planta}/>
                </div>
                <div className='row mt-3 border'>
                    <AgregarComentarioComponent comentarioEditado = {comentarioEditado}/>
                </div>
                <div className = 'row fijar border border-2 rounded bg-light p-1 mt-3' >
                    
                    <div className="row ">
                    
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