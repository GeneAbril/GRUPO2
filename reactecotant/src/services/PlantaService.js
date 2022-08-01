import axios from "axios";


// const baseUrl = "http://localhost:8080/api/plantas"
const baseUrl = "http://3.143.231.179/api/plantas"

//Esta funcion va a funcionar y correr mientras hacemos otras cosas
const getAllPlantas = async(id_dispositivo) =>{
    const res = await axios.get(baseUrl + "/lista")
    const resDispositivo = res.data.filter(x => x.dispositivo.id === id_dispositivo );
    console.log(resDispositivo)
    return resDispositivo;
}
//Funcion para eliminar un planta por id
const eliminarPlanta = async(id) =>{ //asincrona por que tenemos que esperar que nos de una respuesta
    //eliminarplanta(1)

    //respuesta del axios, tipo post a la url   
    const res = await axios.post(baseUrl + "/delete/" +id);

    //retorna la respuesta y la data 
    return res.data;
}

const savePlanta = async(planta, id_dispositivo)=>{
    const res = await axios.post(baseUrl+ "/create/" + id_dispositivo, planta);
    return res.data;

}

export {savePlanta, eliminarPlanta,getAllPlantas}