import React,{ useEffect, useState } from "react";



const initialValues = [
    {
        key : '',
        comentario:''
    }
]


const AgregarComentarioComponent = ({comentarioEditado}) => {
    const [values, setValues] =useState(initialValues);
    const {key, comentario1}=values;
    

    /**  */
    useEffect( 
        ()=>{
            if(comentarioEditado !== null){
                setValues(comentarioEditado)
            }else{
                setValues({
                    key:'',
                    comentario:''
                
            })
        }
    }
    ,[comentarioEditado]);


    /** al mas minimo cambio en este valor, (e), se activa */
    const handleInputChange=(e)=>{
    
        const changedFormValue ={
            ...values, 
            [e.target.name]:e.target.value
          //key:key
        }
        setValues(changedFormValue)
        }

    return(
    <form className="col">
        
        <div className="form-group">
            <input
                        type='text'
                        className="form-control" 
                        id="comentario" 
                        placeholder="Deje su comentario!" 
                        name='comentario' 
                        value={comentarioEditado} 
                        onChange={handleInputChange}/>
            <button type="button" className="btn btn-outline-warning m-2" >Agregar</button>
            <button type="button" className="btn btn-outline-success m-2">Limpiar</button>
        </div>
    </form>

    )
}

export default AgregarComentarioComponent;