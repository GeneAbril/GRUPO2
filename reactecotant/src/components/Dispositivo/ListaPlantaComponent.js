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
    <th class="table-light" scope="col">Planta</th>
    <td class=""><br/> <a href="plantas.html" class="text-decoration-none text-white border-2 btn btn-secondary btn-sm mb-5">Ver</a></td>
    </>)
}

export default ListaPlantaComponent;