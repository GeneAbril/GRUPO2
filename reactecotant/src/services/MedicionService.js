import axios from "axios"

const baseUrl = "http://3.19.188.80/api/mediciones"

export const getLastMediciones = async () => {
    const response = await axios.get(baseUrl + '/lista')
    console.log(response.data[response.data.length - 1])
    return response.data[response.data.length - 1]
}