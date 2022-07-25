import axios from "axios";


// const baseUrl = "http://localhost:8080/api/dispositivos"
const baseUrl = "http://18.224.1.156/api/plantas"

//Esta funcion va a funcionar y correr mientras hacemos otras cosas
const getAll = async() =>{
    const res = await axios.get(baseUrl + "/lista")
    //await axios.get(localhost:9080/api/dispositivos/lista)
    console.log(res.data);
    return res.data;
}
//Funcion para eliminar un planta por id
const eliminarPlanta = async(id) =>{ //asincrona por que tenemos que esperar que nos de una respuesta
    //eliminarplanta(1)

    //respuesta del axios, tipo post a la url   
    const res = await axios.post(baseUrl + "/delete/" +id);

    //retorna la respuesta y la data 
    return res.data;
}

const savePlanta = async(planta, id)=>{
    const res = await axios.post(baseUrl+ "/create/" + id, planta);
    return res.data;

}

export {savePlanta, eliminarPlanta,getAll}