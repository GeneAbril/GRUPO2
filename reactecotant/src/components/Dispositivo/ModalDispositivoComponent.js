import React from 'react';


const ModalDispositivoComponent = () =>{
    return (
    <div className="modal fade" id="modalDispositivo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-success">
                    <h5 className="mt-1 text-white" id="exampleModalLabel">Agregar dispositivo</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="">
                            <label htmlFor="recipient-name" className="col-form-label">Nombre de dispositivo:</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                            <label htmlFor="recipient-name" className="col-form-label">Selecciona las propiedades a
                                medir:</label>
                            <label htmlFor="html">Temperatura</label> <input type="checkbox" name="opcion1" id="t"
                                value="t"/><br/>
                            <label htmlFor="html">Humedad</label> <input type="checkbox" name="opcion2" id="h"
                                value="h"/><br/>
                        </div>
                    </form>
                </div>
                {/* <!--boton crear y cerrar--> */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Crear Dispositivo</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ModalDispositivoComponent;

