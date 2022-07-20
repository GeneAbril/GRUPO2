/*useMemosolo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada renderizado*/
import { useMemo, useEffect, useState } from "react"; //hook useMemo 
/*importamos elementos de la libreria chart.js que nos permiten modificar distintos aspectos de nuestros graficos como tambien que tipo de grafico queremos utilizar */
import{
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
import {Line} from "react-chartjs-2";

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
//Eje Y 
const scores = [6,5,5,5,3,4,6,4,5];

// Otra linea con otros datos (aplicar a humedad)
const scores2 = [4,3,6,2,5,6,2,1,0];

const options ={
    //Para Pintar bajo la linea dle grafico
    fill:true, //elemento que importamos mas arriba
    //Para que se ajuste o no al cuadro
    responsive:true,
    //Para ver el punto de inicio del eje Y
    scales:{
        y:{
            min: 0,
        },
    },
    plugins:{ //propiedad plugins
        //true o false para poner el titulo del grafico
        legend:{
            display:true, 
        },
    },
};

export default function LineChartComponent(){
    //Memorizar los datos que le vamos a pasar a nuestro grafico
    const [data, setData] = useState({
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
        const baseUrl = "http://localhost:8080/api/mediciones/lista";
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
                    borderColor: "rgb(255, 87, 51, 0.3)",
                    //Colorear sector bajo la linea del grafico
                    backgroundColor:("rgb(255, 87, 51, 0.3)"),
                },
                {
                    label: "Humedad", //leyenda de nuestro graficos
                    data: datasets2, //Establecemos los datos
                    tension:0.3, //curvatura a la recta entre 0-1
                    //color de la linea y/o bordes del grafico
                    borderColor: "rgb(51, 91, 255, 0.3)",
                    //Incrementar tamaño de los puntos
                    pointRadius: 6,
                    //Colorear los puntos
                    pointBackgroundColor:("rgb(51, 91, 255, 0.3)"),
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
        
return <Line data={data} options={options}/>
};