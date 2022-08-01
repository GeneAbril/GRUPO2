import axios from "axios";


// const baseUrl = "http://localhost:8080/api/dispositivos"
const baseUrl = "http://3.143.231.179/api/dispositivos"

//Esta funcion va a funcionar y correr mientras hacemos otras cosas
const getAll = async(id_usuario) =>{
    const res = await axios.get(baseUrl + "/lista/" + id_usuario)
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

const saveDispositivo = async(dispositivo, id_usuario)=>{
    const res = await axios.post(baseUrl+ "/create/" + id_usuario, dispositivo);
    return res.data;
}

export {getAll, eliminarDispositivo, saveDispositivo}
