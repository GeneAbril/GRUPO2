import React, { useEffect, useState } from 'react'
import BarChartComponent from './BarChartComponent'
import { TestComponent } from './TestComponent'
import { LineChartComponent } from './LineChartComponent'
import axios from 'axios'


const GraficosComponent = () => {
  const [callFetch, setCallFetch] = useState(null)
  const [filtro, setFiltro] = useState([])

  const baseUrl = "http://18.224.1.156/api/mediciones/lista";
  const fetchData = async () => {
    const response = await axios.get(baseUrl)
    const normalizarArray = await response.data.map(x => x)
    setCallFetch(response.data)
  }

  useEffect(() => {

    fetchData();
  }, [])
  return (
    <div>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <h1>Graficos</h1>
          <div className='mt-3'>
            <button className='btn btn-outline-warning'>Volver</button>
          </div>
        </div>
        <hr />
        {/* BOTONES */}
        <div className='d-flex justify-content-center'>
          <span class="btn btn-outline-dark me-1 click" button onClick={() => setFiltro(callFetch.filter(x => x))}>1 min</span>
          <span class="btn btn-outline-dark me-1 click" onClick={() => setFiltro(callFetch.filter((x, index) => {
            if (index % 5 == 0) {
              return x
            }
            if (index == 0) return x
          }))}>5 min</span>
          <span class="btn btn-outline-dark me-1 click" onClick={() => setFiltro(callFetch.filter((x, index) => {
            if (index % 10 == 0) {
              return x
            }
          }))}>10 min</span>
        </div>

      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <LineChartComponent callFetch={callFetch} setCallFetch={setCallFetch} filtro={filtro} setFiltro={setFiltro} />
          </div>
          <div className='col'>
            <TestComponent callFetch={callFetch} setCallFetch={setCallFetch} filtro={filtro} />
            {/* <BarChartComponent/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraficosComponent