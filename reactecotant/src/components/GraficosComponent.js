import React from 'react'
import LineChartComponent from './Graficas/LineChartComponent'
import BarChartComponent from './Graficas/BarChartComponent'


const GraficosComponent = () => {
  return (
    <div>
        <h1>Graficos</h1>
        <hr/>
        <div className = 'container'>
          <div className = 'row'>
            <div className = 'col'>
              <LineChartComponent/>
            </div>
            <div className = 'col'>
              <BarChartComponent/>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default GraficosComponent