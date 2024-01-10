import React from 'react'

export const ComponenteMapeo = () => {

  const peliculas = ["El Amancecer", "Clausula", "El Millar"]
  //const peliculas = []
    
  return (
    <div>
        <h2>Mapeo de Items</h2>

        {/* Lo que estoy haciendo es esta parte, es un condicional if pero de otra manera más resumida- POR EJEMPLO: {Condición ? lo que pasa en true : lo que pasa en false} */}
        {peliculas.length >= 1 ? <ul>
            {
                peliculas.map((pelicula, indice) => {
                return(
                        <li key={indice}>{pelicula}</li>
                    )
                })
            }
        </ul> 
        : 
        <p>NO HAY PELICULAS</p>
        }
        
      
    </div>

  )
}

export default ComponenteMapeo;