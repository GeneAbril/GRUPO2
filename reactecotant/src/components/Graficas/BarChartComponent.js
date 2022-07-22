/*useMemosolo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada renderizado*/
import React, { useEffect, useState } from "react"; //hook useMemo 
/*Exportar elementos de la libreria chart.js que nos permiten modificar distintos aspectos de nuestros graficos como tambien que tipo de grafico queremos utilizar */
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,//Este es el grafico que utilizamos 
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
//Importamos el grafico de linea desde la libreria react chart 
import {Bar} from "react-chartjs-2";

//Registrar elementos para que aparescan unica y exclusivamente los que estamos utilizando dentro de la aplicacion
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const options ={
    //Para Pintar bajo la linea dle grafico
    fill: true,
    //Quitar animacion grafico
    animations: false,
    //Que sea responsivo
    responsive: true,
    //Eje Y empieza en 0
    scales:{
        y:{
            min:0,
           
        },
    },
    plugins:{ //propiedad plugins
        //true o false para poner el titulo del grafico
        legend:{
            display: true, 
        },
    },
};

export default function BarChartComponent(){
    
    const [data, setData] = useState({//Set de datos que se apliquen en nuestro grafico
        labels:['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [
            {
                label: "Mis datos", //leyenda de nuestro graficos
                data: [], //Establecemos los datos
                tension:0.3, //curvatura a la recta entre 0-1
                //color de la linea y/o bordes del grafico
                borderColor: "rgb(255, 87, 51)",
                //Colorear sector bajo la linea del grafico
                backgroundColor:("rgb(255, 87, 51, 0.3)"),
            },
            {
                label: "Mis datos (2)", //leyenda de nuestro graficos
                data: [], //Establecemos los datos
                tension:0.3, //curvatura a la recta entre 0-1
                //color de la linea y/o bordes del grafico
                borderColor: "rgb(51, 91, 255)",
                //Incrementar tamaño de los puntos
                pointRadius: 6,
                //Colorear los puntos
                pointBackgroundColor:("rgb(51, 91, 255)"),
                //Colorear sector bajo la linea del grafico
                backgroundColor:("rgb(51, 91, 255, 0.3)"),
            },
        ],
},[]);

    
    useEffect(() => {
        const fetchData = async() => {
            const baseUrl = "http://3.19.188.80/api/mediciones/lista";
            const datasets1 = [];
            const datasets2 = [];
 
        await fetch(baseUrl).then((data) => {
        console.log("Api data", data)
        const res = data.json();
        return res

        }).then((res) => {
            console.log("ressss", res)
        for ( const val of res) {
            datasets1.push(val.temperatura);
            datasets2.push(val.humedad);
        }

        setData({//Set de datos que se apliquen en nuestro grafico
                labels:['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                datasets: [
                    {
                        label: "Temperatura", //leyenda de nuestro graficos
                        data: datasets1, //Establecemos los datos
                        tension:0.3, //curvatura a la recta entre 0-1
                        //color de la linea y/o bordes del grafico
                        borderColor: "rgb(255, 87, 51)",
                        //Colorear sector bajo la linea del grafico
                        backgroundColor:("rgb(255, 87, 51, 0.3)"),
                    },
                    {
                        label: "Humedad", //leyenda de nuestro graficos
                        data: datasets2, //Establecemos los datos
                        tension:0.3, //curvatura a la recta entre 0-1
                        //color de la linea y/o bordes del grafico
                        borderColor: "rgb(51, 91, 255)",
                        //Incrementar tamaño de los puntos
                        pointRadius: 6,
                        //Colorear los puntos
                        pointBackgroundColor:("rgb(51, 91, 255)"),
                        //Colorear sector bajo la linea del grafico
                        backgroundColor:("rgb(51, 91, 255, 0.3)"),
                    },
                ],
        },[]);

        console.log("arrData", datasets1, datasets2);
        }).catch(e => {
            console.log("error", e);
        })
    }
    
    fetchData();
}, {})    
            
    return <div className="App">
                <Bar data={data} options={options}/>
            </div>
};