import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ListaPlantaComponent = () => {

    const url = '';

    const llamarPlantas = async () => {
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
    }

    return (
        <>
            <Link to="/comentarios">
                <div className="btn btn-outline-success m-1"> <i class="fa-solid fa-seedling"></i> Planta</div>
            </Link>
        </>
        )
}

export default ListaPlantaComponent;