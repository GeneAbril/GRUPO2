import React from "react";
import '../../styleComentario.css';



const TarjetaPlantaComponents = ({ planta }) => {

    return (
        <div className="row align-items-center">
            
            <div className="col">
            <h3 className="m-1 p-1">{planta}</h3>
                <div className="w-50 py-0 ">
                    <div className="square rounded-pill">
                        <div className="imgPlanta "></div>
                    </div>
                </div>
            </div>
            <div id="ficha" className="col  p-25">
                <ul>
                    <li><h4>Nombre plata:</h4> </li>
                    <li><h4>Fecha plantacion:</h4></li>
                    <li><h4>Nombre cientifico:</h4></li>
                    
                </ul>
            </div>
                
        </div>
       )
}
export default TarjetaPlantaComponents;