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
import { Bar } from "react-chartjs-2";
import axios from 'axios';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart} from 'chart.js';

// OR only to specific charts:
// var Bar = new (ctx, {
//     plugins: [ChartDataLabels],
//     options: {
//       // ...
//     }
//   })


Chart.register(ChartDataLabels);

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
    fill: true, //elemento que importamos mas arriba
    //Para que se ajuste o no al cuadro
    responsive: true,
    //Para ver el punto de inicio del eje Y
    scales: {

        y: {
            min: 0,
            max: 100,
            grid:{
                display:false
            }
        },
        x: {
            min: 0,
            max: 100
        }

    },
    plugins: { //propiedad plugins
        //true o false para poner el titulo del grafico
        legend: {
            display: true,
        },
        
    },
    

};

export const TestComponent = ({callFetch, setCallFetch, filtro}) => {
    //Memorizar los datos que le vamos a pasar a nuestro grafico
    const [data, setData] = useState();
    const [detalleTemperatura, setDetalleTemperatura] = useState([0, 0, 0])
    const [detalleHumedad, setDetalleHumedad] = useState([0, 0, 0])
    // const baseUrl = "http://localhost:8080/api/mediciones/lista";

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

    const temperaturaDetalles = () => {

        const filtroTemperatura = filtro.map(x => x.temperatura)
        const mediaTemp = () => {
            let media = 0;
            filtroTemperatura.forEach(t => {
                media += t
            });
            return media / filtroTemperatura.length
        }
        console.log('temperatura: ', Math.min(...filtroTemperatura))
        setDetalleTemperatura([Math.min(...filtroTemperatura), Math.max(...filtroTemperatura), mediaTemp()])
    }


    const humedadDetalles = () => {

        const filtroHumedad = filtro.map(x => x.humedad)
        const mediaHum = () => {
            let media = 0;
            filtroHumedad.forEach(t => {
                media += t
            });
            return media / filtroHumedad.length
        }
        console.log('humedad: ', Math.min(...filtroHumedad))
        setDetalleHumedad([Math.min(...filtroHumedad), Math.max(...filtroHumedad), mediaHum()])
    }
    // const filtroMin = 

    useEffect(() => {
        if (callFetch) {


            if (filtro) {


                temperaturaDetalles()
                humedadDetalles()

            }

            console.log(callFetch);
            // const ejex = mediciones.map(medicion => [medicion.temperatura, medicion.humedad])
            // console.log(ejex);
            setData({//Set de datos que se apliquen en nuestro grafico
                labels: ["min", "max", "media"],
                datasets: [
                    
                    {
                        label: "Temperatura", //leyenda de nuestro graficos
                        data: detalleTemperatura, //Establecemos los datos
                        tension: 0.3, //curvatura a la recta entre 0-1
                        //color de la linea y/o bordes del grafico
                        borderColor: "rgb(255, 87, 51, 0.3)",
                        //Colorear sector bajo la linea del grafico
                        backgroundColor: ("rgb(255, 87, 51, 0.3)"),
                    },
                    {
                        label: "Humedad", //leyenda de nuestro graficos
                        data: detalleHumedad, //Establecemos los datos
                        tension: 0.3, //curvatura a la recta entre 0-1
                        //color de la linea y/o bordes del grafico
                        borderColor: "rgb(51, 91, 255, 0.3)",
                        //Incrementar tamaño de los puntos
                        pointRadius: 6,
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
                data ? <Bar data={data} options={options} /> : ''
            }
        </>
    )
}; 