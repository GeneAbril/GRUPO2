import axios from 'axios';
import React from 'react';

const ListaPlantaComponent=() =>{

    const url = '';

    const llamarPlantas = async () => {
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
    }

    return (
    <>
    <div className="btn btn-outline-success m-1"> <i class="fa-solid fa-seedling"></i> Planta</div>
    </>)
}

export default ListaPlantaComponent;