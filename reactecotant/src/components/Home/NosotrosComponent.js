import React, { useState } from 'react';
import FotoCata from "../../assets/img/cata.png";
import FotoNico from "../../assets/img/NicolasNeira.jpeg";
import FotoCarlos from "../../assets/img/carlitos.png";
import FotoGabo from "../../assets/img/Gabo.jpeg";
import FotoGene from "../../assets/img/Genepng.png";




const NosotrosComponent = () => {
    
return(
<div className='container-fluid mt-2'>
    <div className='row'>
        <div className='col'>
        <img class="perfil shadow " src={FotoCata} alt="FotoPerfil" width="100" height="100" />
    <h5>Catalina <br />
    Castillo <br />
    <a href="https://www.linkedin.com/in/catalina-castillo-belmar/"target="_blank" class="fa-brands fa-linkedin"></a></h5>
        </div>
        <div className='col'>
        <img class="perfil shadow " src={FotoNico} alt="FotoPerfil" width="100" height="100" />    
        <h5>Nicolas <br />
    Neira <br />
    <a href="https://www.linkedin.com/in/nicolas-neira-lopez/"target="_blank" class="fa-brands fa-linkedin"></a></h5>
        </div>
        <div className='col'>
        <img class="perfil shadow " src={FotoCarlos} alt="FotoPerfil" width="100" height="100" />
        <h5>Carlos <br />
    Iturra <br />
    <a href="https://www.linkedin.com/in/carlos-iturra-gonzalez/"target="_blank" class="fa-brands fa-linkedin"></a></h5>
        </div>
        <div className='col'>
        <img class="perfil shadow " src={FotoGabo} alt="FotoPerfil" width="100" height="100" />
        <h5>Gabriel <br />
    Guzman<br />
    <a href="https://www.linkedin.com/in/gguzmann/"target="_blank" class="fa-brands fa-linkedin"></a></h5>
        </div>
        <div className='col'>
        <img class="perfil shadow " src={FotoGene} alt="FotoPerfil" width="100" height="100" />
        <h5>Genesis <br />
    Quezada <br />
    <a class="fa-brands fa-linkedin" href="https://www.linkedin.com/in/genesis-quezada-rodriguez/"target="_blank"></a></h5>
        </div>
    </div>
</div>);
}

export default NosotrosComponent;