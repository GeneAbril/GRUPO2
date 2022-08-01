import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import corona from "../../assets/img/corona.png"
import { getSession, setSession } from '../../persistencia/dataUsuario';


const initalValue = {
  correo: '',
  clave: ''
}

const LoginComponent = ({ setStateSession }) => {

  const [value, setValue] = useState(initalValue)
  const [respuesta, setRespuesta] = useState(null)

  // respuesta = 'hola' // INCORRECTO
  // setRespuesta('hola') // CORRECTO


  const { correo, clave } = value;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value
    }

    setValue(newValue)
  }

  const validarUsuario = async () => {

    try {
      // const response = await axios.post('http://localhost:8080/api/usuarios/ingresar', value)
      const response = await axios.post('http://3.143.231.179/api/usuarios/ingresar', value)
      setSession(await response.data);
      await setStateSession(getSession())
      return response.data
    } catch (error) {
      return 'error';
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRespuesta(await validarUsuario())
  }

  return (
    <div>

      <div className='fondologin'>
        <img src={corona} alt="corona" />
      </div>
      <div className='caja1'>
        <div className='caja2'>
          <h1>Iniciar Sesion</h1>
          <hr />
          <form onSubmit={handleSubmit} >
            <div className='error'>
              {respuesta != null ? respuesta != 'error' ? navigate('/dispositivos') : 'Datos incorrectos' : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input type="email" className="form-control" onChange={handleChange} name='correo' value={correo} id="correo" />
            </div>
            <div className="mb-3">
              <label htmlFor="clave" className="form-label">Password</label>
              <input type="password" className="form-control" onChange={handleChange} name='clave' value={clave} id="clave" />
            </div>
            <button type="submit" className="btn btn-success">Conectarse</button>
            <br />
            <Link to="/register"><p>Registrarse</p></Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent