import React from 'react'

export const ComponenteAcciones = () => {

  function Alertar(e, tipo) {
    console.log(`${tipo} en la caja`)
  }


  return (
    <div id='caja' onMouseEnter={ e => Alertar(e, "Entraste") } onMouseLeave={ e => Alertar(e, "Saliste") }>

    </div>
  )
}

export default ComponenteAcciones;