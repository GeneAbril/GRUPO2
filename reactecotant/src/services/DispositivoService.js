import axios from "axios";


const baseUrl = "http://localhost:8080/api/dispositivos"
// const baseUrl = "http://18.224.1.156/api/dispositivos"

//Esta funcion va a funcionar y correr mientras hacemos otras cosas
const getAll = async() =>{
    const res = await axios.get(baseUrl + "/lista")
    //await axios.get(localhost:9080/api/dispositivos/lista)
    console.log(res.data);
    return res.data;
}

//Funcion para eliminar un dispositivo por id
const eliminarDispositivo = async(id) =>{ //asincrona por que tenemos que esperar que nos de una respuesta
    //eliminarDispositivo(1)

    //respuesta del axios, tipo post a la url
    const res = await axios.post(baseUrl + "/delete/" +id);

    //retorna la respuesta y la data 
    return res.data;
}

const saveDispositivo = async(dispositivo, id)=>{
    const res = await axios.post(baseUrl+ "/create/" + id, dispositivo);
    return res.data;

}

export {getAll, eliminarDispositivo, saveDispositivo}
