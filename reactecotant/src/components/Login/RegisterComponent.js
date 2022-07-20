import axios from 'axios';
import React, { useState } from 'react'

const initalValue = {
  correo: '',
  clave: ''
}

const RegisterComponent = () => {
    const [value, setValue] = useState(initalValue)

    const {correo, clave} = value;
  
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
      <h1>Registrar</h1>
      <hr />
      <form onSubmit={handleSubmit}>
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
  )
}

export default RegisterComponent