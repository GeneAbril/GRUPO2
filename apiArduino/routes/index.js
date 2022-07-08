const express = require('express');
const router = express.Router();


let count = 0;
let listaArduinos = [];

let date = new Date()
let min = date.getMinutes();
// let hour = date.getHours() - 4;
let hour = date.getHours();
let fecha = `${hour}:${min}`

router.get('/', (req, res) => {
    console.log('Solicitud get');
    count++;
    res.json({
        msg: 'get',
        fecha,
        count,
        listaArduinos
    })
})

router.post('/', (req, res) => {
    const {temperatura, humedad} = req.body;

    const info = {
        temperatura,
        humedad,
        fecha: fecha
    }

    listaArduinos.push(info);

    console.log("Solicitud post. temperatura:", temperatura, humedad, fecha)
    res.json({
        msg: 'post',
        info
    })
})

module.exports = router;

