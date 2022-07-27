import axios from "axios"

// const baseUrl = "http://3.19.188.80/api/mediciones"
const baseUrl = "http://18.224.1.156/api/mediciones"

export const getLastMediciones = async (id) => {
    const response = await axios.get(baseUrl + '/lista')
    const filtroArduino = await response.data.filter(x => x.uniqueId === id)
    console.log(filtroArduino)
    return filtroArduino[filtroArduino.length - 1]
}