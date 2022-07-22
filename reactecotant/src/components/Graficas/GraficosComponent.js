import React from 'react'
import LineChartComponent from './LineChartComponent'
import BarChartComponent from './BarChartComponent'
import { TestComponent } from './TestComponent'


const GraficosComponent = () => {
  return (
    <div>
      <div className='container'>
        <h1>Graficos</h1>
        <hr/>
      </div>
        <div className = 'container-fluid'>
          <div className = 'row'>
            <div className = 'col'>
              {/* <LineChartComponent/> */}
            </div>
            <div className = 'col'>
              {/* <BarChartComponent/> */}
              <TestComponent/>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default GraficosComponent