import React, { useState } from 'react';
import { getSession } from '../../persistencia/dataUsuario';

const initialValue = {
    nombre: '',
    temperatura: false,
    humedad: true,
    arduino: ''
}

const ModalDispositivoComponent = ({ dispositivoAdd }) => {

    const [values, setValues] = useState(initialValue);

    const { nombre, arduino } = values;

    const listUsers = {
        ...getSession()
    }

    const handleChange = (e) => {

        const changedFormValue = {
            ...values,
            listUsers,
            [e.target.name]: e.target.value
            //key:key
        }
        setValues(changedFormValue)
        console.log(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispositivoAdd(values)
        console.log('enter')
    }


    return (
        <div className="modal fade" id="modalDispositivo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-success">
                        <h5 className="mt-1 text-white" id="exampleModalLabel">Agregar dispositivo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <label htmlFor="recipient-name" className="col-form-label">Nombre de dispositivo:</label>
                                <input type="text" onChange={handleChange} name="nombre" value={nombre} className="form-control" id="recipient-name" />
                                <label htmlFor="recipient-name" className="col-form-label">Id Dispositivo:</label>
                                <input type="text" onChange={handleChange} name="arduino" value={arduino} className="form-control" id="recipient-name" />
                                
                            </div>
                            <div className="modal-footer">
                                <input type="submit" className="btn btn-success" data-bs-dismiss="modal" value="Crear Dispositivo" />
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ModalDispositivoComponent;

