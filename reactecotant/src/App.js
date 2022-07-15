import React from 'react'
// Asi se importa bootstrap * SI ES QUE LO TENEMOS INSTALADOS POR NPM *
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import './style.css';
/*funcion que retorna una etiqueta html ej: <div></div>*/
const App = () => {
    return (
        /*fragmento: etiqueta vacia*/ 
        <>
                {/* NAV */}
                <HeaderComponent/>

            {/* CONTENIDO */}
            <div id='contenido'> asda </div>

                {/* FOOTER */}
                <FooterComponent/>
        </>

    )
}

//exportacion global de App
export default App;