import axios from 'axios';
import React, { useState } from 'react'
import corona from "../../assets/img/corona.png"

const initalValue = {
  correo: '',
  clave: '',
  nombre: '',
  apellido: ''
}

const RegisterComponent = () => {
    const [value, setValue] = useState(initalValue)

    const {nombre, apellido, correo, clave} = value;

  
    const handleChange = (e) => {
      const newValue = {
        ...value,
        [e.target.name]: e.target.value
      }
      setValue(newValue)
    }
  
    const crearUsuario = async () => {
      const response = await axios.post('http://localhost:8080/api/usuarios/registrar', value)
      return response.data;
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      crearUsuario()
      setValue(initalValue)
    
    }
  return (
    <div>
      <div className='fondologin'>
        <img src={corona} alt="corona" />
      </div>
    <div className='caja1'>
    <div className='caja2'>
      <h1>Registrar</h1>
      <hr />
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="nombre" className="form-control" onChange={handleChange} name='nombre' value={nombre} id="nombre"  />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="apellido" className="form-control" onChange={handleChange} name='apellido' value={apellido} id="apellido"  />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={handleChange} name='correo' value={correo} id="correo"  />
        </div>
        <div className="mb-3">
          <label htmlFor="clave" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChange} name='clave' value={clave} id="clave" />
        </div>
        <button type="submit" className="btn btn-success">Registrar</button>
      </form>

    </div>
    </div>
    </div>
  )
}

export default RegisterComponent