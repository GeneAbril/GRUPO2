import React from 'react';
import '../../style.css';
const PreciosComponent = () => {


  return (
    <>
    <div className="col container m-4 w-50 text-center">
        <h1>Nuestros precios</h1>
      </div>
      <br/>
      <hr/>
      <div  style={{marginBottom: '300px'}}>

      <div className=" container mt-4 w-50" >
      
        <div className='shadow-lg align-self-center border border-dark'>
          <h2 class="text-center text-white bg-success p-2">MES DE PRUEBA</h2>
          <ol class=" col ">
            <h5 class="text-center">DISFRUTA DE NUESTRO SERVICIO POR UN MES, TOTALMENTE GRATIS.</h5>
            <br />
            <div className='col text-center mt-2'>
              <button type="button" class="btn btn-outline-success">EMPEZAR MES DE PRUEBA</button>
            </div>
          </ol>
        </div>
      </div>
      <br />
      <div class="container w-50 mt-3 mb-5 ">
        <div className='shadow-lg align-self-center border border-dark'>
          <h2 class="text-center text-white bg-success p-2">PLAN PREMIUM </h2>
          <ol class="col  ">
            <h4 class="text-center text-dark">SIGUE DISFRUTANDO DE NUESTRO SERVICIO CON ESTE INCREIBLE PLAN PREMIUM</h4>
            <br />
            <ul class="text-center"><i class="fa-solid fa-circle-check"></i> ARDUINO</ul>
            <br />
            <ul class="text-center"><i class="fa-solid fa-circle-check"></i>ASISTENCIA TÉCNICA</ul>
            <br />
            <ul class="text-center"><i class="fa-solid fa-circle-check"></i>MANUAL DE INSTRUCCIONES</ul>
            <br />
            <ul class="text-center"><i class="fa-solid fa-circle-check"></i>CAMBIOS Y REPARACIONES</ul>
            <br />
            <div className='col text-center mt-2 mb-2'>
              <button type="button" class="btn btn-outline-success">SUSCRIBETE AQUÍ</button>
            </div>
          </ol>
        </div>
      </div>
      </div>
    </>
  )
}

export default PreciosComponent