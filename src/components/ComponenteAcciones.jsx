import React from 'react'

export const ComponenteAcciones = () => {

  function Alertar(e, tipo) {
    console.log(`${tipo} en la caja`)
  }

  const estasDentro = e => {
    console.log("Estas dentro del input")
  }

  const estasFuera = e => {
    console.log("Estas fuera del input")
  }

  const alertarAlgo = () => {
    alert("Estas presionando el botón") 
  }

  return (
    // usamos las acciones de mouseenter y mouse leave
    <div id='caja' onMouseEnter={ e => Alertar(e, "Entraste") } onMouseLeave={ e => Alertar(e, "Saliste") }>
        {/* Aplicamos las acciones de Focus y Blur*/}
        <input type="text" 
          onFocus={ estasDentro }
          onBlur={ estasFuera }
        />

        <button onClick={() => {alertarAlgo()}}>Presiona Aquí</button>
    </div>

    //La diferencia que tien cada una de las acciones, es que unas detectan el objeto donde están y las otras debo hacer click para que sepa que cosa estoy ejecutando
  )
}

export default ComponenteAcciones;