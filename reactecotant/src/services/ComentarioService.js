import axios from "axios";

const baseUrl = "http://3.143.231.179/api/comentarios"

const getAllComents = async() =>{
    const res = await axios.get(baseUrl + "/lista")
    //await axios.get(localhost:9080/api/comentarios/lista)
    console.log(res.data);
    return res.data;
}


const eliminarComentario = async(id_usuario) =>{ //asincrona por que tenemos que esperar que nos de una respuesta

    //respuesta del axios, tipo post a la url   
    const res = await axios.post(baseUrl + "/delete/" +id_usuario);

    //retorna la respuesta y la data 
    return res.data;
}

const saveComentario = async(dispositivo, id_planta)=>{
    const res = await axios.post(baseUrl+ "/create/" + id_planta, dispositivo);
    return res.data;
}

export {getAllComents, eliminarComentario, saveComentario}