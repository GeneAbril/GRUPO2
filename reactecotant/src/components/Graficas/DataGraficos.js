//Variables para setear el datasets* (asi tener 2 lineas en 1 grafico)
const dataFirst = {
    label: 'Temperatura',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
}

const dataSecond = {
    label: 'Humedad',
    backgroundColor: 'rgb(8,14,189)',
    borderColor: 'rgb(8,14,189)',
    data: [5, 15, 25, 12, 30, 13, 25],
}


//Grafico 1
  // Columnas
const labels = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'domingo',
];

  //Configuracion del grafico temperatura
const data = {
    labels: labels,
    datasets: [dataFirst, dataSecond]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

  // renderizar el chart
const temperatura = new Chart(
    document.getElementById('temperatura'),
    config
);

//Variables para calculos de datos (min,max,promedio)
const temperaturaData = {
    label: 'Temperatura',
    data: [45, 1, 25,],
    backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 99, 132)',
    'rgb(255, 99, 132)'
    ],
    borderColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 99, 132)',
    'rgb(255, 99, 132)'
    ],
    borderWidth: 1
};

const humedadData={
    label: 'Humedad',
    data: [30, 5, 20,],
    backgroundColor: [
    'rgb(8,14,189)',
    'rgb(8,14,189)',
    'rgb(8,14,189)'
    ],
    borderColor: [
        'rgb(8,14,189)',
        'rgb(8,14,189)',
        'rgb(8,14,189)'
        ],
    borderWidth: 1
}

  //Graficos DatosT (min,max,promedio)
const etiquetas = [
'°C Maxima',
'°C Minimo',
'°C Promedio',

];

const datosTemperatura = {
labels: etiquetas,
datasets: [temperaturaData, humedadData]
};

const configDatoTemperatura = {
type: 'bar',
data: datosTemperatura,
options: chartOptions
};
// render el chart2
const datos = new Chart(
    document.getElementById('datos Temperatura'),
    configDatoTemperatura
);

var chartOptions = {
    scales:{
        xAxes:[{
            barPercentage: 0.3,
            categoryPercentage: 0.6
        }],
        y: {
            beginAtZero: true
        }
    }
}
