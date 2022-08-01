import axios from "axios"

// const baseUrl = "http://localhost:8080/api/mediciones"
const baseUrl = "http://3.143.231.179/api/mediciones"

export const getLastMediciones = async (id) => {
    const response = await axios.get(baseUrl + '/lista')
    const filtroArduino = await response.data.filter(x => x.uniqueId === id)
    console.log(filtroArduino)
    return filtroArduino[filtroArduino.length - 1]
}