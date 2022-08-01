import axios from 'axios';
import React, { useState } from 'react'
import corona from "../../assets/img/corona.png"
import { Link, useNavigate } from "react-router-dom";
const initalValue = {
  correo: '',
  clave: '',
  nombre: '',
  apellido: ''
}

const RegisterComponent = () => {

  const [value, setValue] = useState(initalValue)
  const [respuesta, setRespuesta] = useState(null)
  const { nombre, apellido, correo, clave } = value;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value
    }
    setValue(newValue)
  }

  const crearUsuario = async () => {
  try {
      // const response = await axios.post('http://localhost:8080/api/usuarios/registrar', value)
      const response = await axios.post('http://3.143.231.179/api/usuarios/registrar', value)
      return response.data;
    } catch (error) {
      return 'error';
    }
  }

    const handleSubmit = async (e) => {
    e.preventDefault();
    // Llama funcion crearUsuario
    setRespuesta(await crearUsuario()) 

    // Limpiar formulario
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
          <div className='error'>
              {respuesta != null ? respuesta != 'error' ? navigate('/login') : 'Datos incorrectos' : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="nombre" className="form-control" onChange={handleChange} name='nombre' value={nombre} id="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input type="apellido" className="form-control" onChange={handleChange} name='apellido' value={apellido} id="apellido" />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Email address</label>
              <input type="email" className="form-control" onChange={handleChange} name='correo' value={correo} id="correo" />
            </div>
            <div className="mb-3">
              <label htmlFor="clave" className="form-label">Password</label>
              <input type="password" className="form-control" onChange={handleChange} name='clave' value={clave} id="clave" />
            </div>
            <button type="submit" className="btn btn-success">Registrar</button>
            <br/>
            <Link to="/login"><p>Volver a inicio de sesion</p></Link>
          </form>

        </div>
      </div>
    </div>
  )
}

export default RegisterComponent