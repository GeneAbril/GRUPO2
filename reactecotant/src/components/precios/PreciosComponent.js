import React from "react";
import "../../style.css";
const PreciosComponent = () => {
  return (
    <div className="">
      <div className="container-fluid m-4">
        <h1>Nuestros precios</h1>
        <hr />
      </div>
      <div style={{ marginBottom: "300px" }}>
        <div className=" container-fluid mt-4 w-50">
          <div id="precios" className="row">
            <h2 class="text-center text-white bg-success p-2">MES DE PRUEBA</h2>
            <ol class=" col ">
              <h5 class="text-center">
                DISFRUTA DE NUESTRO SERVICIO POR UN MES, TOTALMENTE GRATIS.
              </h5>
              <br />
              <div className="col text-center mt-2">
                <button type="button" class="btn btn-outline-success mb-3">
                  EMPEZAR MES DE PRUEBA
                </button>
              </div>
            </ol>
          </div>
        </div>
        <br />
        <div class="container-fluid w-50 mt-3 mb-5 ">
          <div id="precios" className="row">
            <h2 class="text-center text-white bg-success p-2">PLAN PREMIUM </h2>
            <ol class="col  ">
              <h4 class="text-center text-dark">
                SIGUE DISFRUTANDO DE NUESTRO SERVICIO CON ESTE INCREIBLE PLAN
                PREMIUM
              </h4>
              <br />
              <ul class="text-center">
                <i class="fa-solid fa-circle-check"></i> ARDUINO
              </ul>
              <br />
              <ul class="text-center">
                <i class="fa-solid fa-circle-check"></i>ASISTENCIA TÉCNICA
              </ul>
              <br />
              <ul class="text-center">
                <i class="fa-solid fa-circle-check"></i>MANUAL DE INSTRUCCIONES
              </ul>
              <br />
              <ul class="text-center">
                <i class="fa-solid fa-circle-check"></i>CAMBIOS Y REPARACIONES
              </ul>
              <br />
              <div className="col text-center mt-2 mb-2">
                <button type="button" class="btn btn-outline-success">
                  SUSCRIBETE AQUÍ
                </button>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreciosComponent;
