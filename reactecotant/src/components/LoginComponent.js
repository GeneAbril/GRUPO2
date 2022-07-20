import axios from 'axios';
import React, { useState } from 'react'

const initalValue = {
  correo: '',
  clave: ''
}

const LoginComponent = () => {

  const [value, setValue] = useState(initalValue)

  const {correo, clave} = value;

  const handleChange = (e) => {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value
    }

    setValue(newValue)
  }

  const validarUsuario = async () => {
    
    const response = await axios.post('http://localhost:8080/api/usuarios/ingresar', value)
    console.log(response.data)
    return response.data
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validarUsuario();
  }

  return (
    <div>
      <h1>Login</h1>
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

export default LoginComponent