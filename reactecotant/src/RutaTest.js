import React from 'react'
import { Link } from "react-router-dom";

const RutaTest = () => {
  return (
    <div>
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/home">Invoices</Link>
      <Link to="/login">Expenses</Link>{/*maldad de prueba, se ve? */}
    </nav>
  </div>
  )
}

export default RutaTest