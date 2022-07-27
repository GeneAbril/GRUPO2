import React, { useState } from "react";
import FotoCata from "../../assets/img/cata.jpg";
import FotoNico from "../../assets/img/NicolasNeira.jpeg";
import FotoCarlos from "../../assets/img/carlitos.jpg";
import FotoGabo from "../../assets/img/Gabo.jpeg";
import FotoGene from "../../assets/img/gene.jpg";
import "../../nosotros.css";
import corona from "../../assets/img/corona.png";

const NosotrosComponent = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="fondologin">
        <img src={corona} alt="corona" />
      </div>
      <div id="nosotros" className="row">

        <h1 className=" mt-3">Quienes Somos</h1>
        <hr className="mb-5" />
        <div className="col">
          <img
            id="img1"
            className="perfil "
            src={FotoCata}
            alt="FotoPerfil"
            width="100"
            height="100"
          />

          <h5>
            <br /> Catalina Castillo <br /> Del Carmen <br />
            <br />
            <a
              href="https://www.linkedin.com/in/catalina-castillo-belmar/"
              target="_blank"
              class="fa-brands fa-linkedin"
            ></a>
          </h5>
        </div>
        <div className="col">
          <img
            id="img2"
            class="perfil "
            src={FotoNico}
            alt="FotoPerfil"
            width="100"
            height="100"
          />
          <h5>
            <br /> Nicolas Neira
            <br /> Lopez <br />
            <br />
            <a
              href="https://www.linkedin.com/in/nicolas-neira-lopez/"
              target="_blank"
              class="fa-brands fa-linkedin"
            ></a>
          </h5>
        </div>
        <div className="col">
          <img
            id="img3"
            className="perfil "
            src={FotoCarlos}
            alt="FotoPerfil"
            width="100"
            height="100"
          />
          <h5>
            <br /> Carlos Iturra <br />
            Gonzalez <br />
            <br />
            <a
              href="https://www.linkedin.com/in/carlos-iturra-gonzalez/"
              target="_blank"
              class="fa-brands fa-linkedin"
            ></a>
          </h5>
        </div>
        <div className="col">
          <img
            id="img4"
            class="perfil "
            style={{ objectFit: "cover" }}
            src={FotoGabo}
            alt="FotoPerfil"
            width="100"
            height="100"
          />
          <h5>
            <br /> Gabriel Guzman
            <br />
            Nuñez
            <br />
            <br />
            <a
              href="https://www.linkedin.com/in/gguzmann/"
              target="_blank"
              class="fa-brands fa-linkedin"
            ></a>
          </h5>
        </div>
        <div className="col">
          <img
            id="img5"
            class="perfil "
            src={FotoGene}
            alt="FotoPerfil"
            width="100"
            height="100"
          />
          <h5>
            <br /> Genesis Quezada
            <br />
            Rodriguez <br />
            <br />
            <a
              id="linkge"
              class="fa-brands fa-linkedin"
              href="https://www.linkedin.com/in/genesis-quezada-rodriguez/"
              target="_blank"
            ></a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NosotrosComponent;
