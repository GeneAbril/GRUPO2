/*useMemosolo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada renderizado*/
import { useMemo, useEffect, useState } from "react"; //hook useMemo
/*importamos elementos de la libreria chart.js que nos permiten modificar distintos aspectos de nuestros graficos como tambien que tipo de grafico queremos utilizar */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
//Importamos el grafico de linea desde la libreria react chart
import { Line } from "react-chartjs-2";
import axios from 'axios';

//Registrar elementos para que aparescan unica y exclusivamente los que estamos utilizando dentro de la aplicacion
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);


const options = {
    //Para Pintar bajo la linea dle grafico
    fill: false, //elemento que importamos mas arriba
    //Para que se ajuste o no al cuadro
    responsive: true,
    //Para ver el punto de inicio del eje Y
    scales: {




    },
    plugins: { //propiedad plugins
        //true o false para poner el titulo del grafico
        legend: {
            display: true,
        },
    },
};

export const LineChartComponent = ({callFetch, setCallFetch, filtro, setFiltro}) => {
    //Memorizar los datos que le vamos a pasar a nuestro grafico
    const [data, setData] = useState();
    // const baseUrl = "http://localhost:8080/api/mediciones/lista";
    const baseUrl = "http://3.19.188.80/api/mediciones/lista";


    const fetchData = async () => {

        const response = await axios.get(baseUrl)
        setCallFetch(response.data)

    }

    useEffect(() => {

        fetchData();
    }, [])

    useEffect(() => {
        // if (callFetch) {

        //

        //     const filtro10Min = callFetch.filter((x, index) => {
        //         if (index % 10 == 0) {
        //             return x
        //         }
        //     })

        //     const filtro20Min = callFetch.filter((x, index) => {
        //         if (index % 20 == 0) {
        //             return x
        //         }
        //     })

        // }

    }, [])


    // const filtroMin =

    useEffect(() => {
        if (callFetch) {

            console.log(callFetch);
            // const ejex = mediciones.map(medicion => [medicion.temperatura, medicion.humedad])
            // console.log(ejex);
            setData({//Set de datos que se apliquen en nuestro grafico
                labels: filtro.map(x => x.fecha),
                datasets: [
                    {
                        datalabels:{
                            display:false
                        },
                        label: "Temperatura", //leyenda de nuestro graficos
                        data: filtro.map(x => x.temperatura), //Establecemos los datos
                        tension: 0.3, //curvatura a la recta entre 0-1
                        //color de la linea y/o bordes del grafico
                        borderColor: "rgb(255, 87, 51, 0.3)",
                        //Incrementar tamaño de los puntos
                        pointRadius: 0,
                        //Colorear sector bajo la linea del grafico
                        backgroundColor: ("rgb(255, 87, 51, 0.3)"),
                    },
                    {
                        datalabels:{
                            display:false
                        },
                        label: "Humedad", //leyenda de nuestro graficos
                        data: filtro.map(x => x.humedad), //Establecemos los datos
                        tension: 0.3, //curvatura a la recta entre 0-1
                        //color de la linea y/o bordes del grafico
                        borderColor: "rgb(51, 91, 255, 0.3)",
                        //Incrementar tamaño de los puntos
                        pointRadius: 0,
                        //Colorear los puntos
                        pointBackgroundColor: ("rgb(51, 91, 255, 0.3)"),
                        //Colorear sector bajo la linea del grafico
                        backgroundColor: ("rgb(51, 91, 255, 0.3)"),
                    },

                ],
            });
        }
    }, [callFetch, filtro])

    return (
        <>
            {
                data ? <Line data={data} options={options} /> : ''
            }
        </>
    )
};