import React from "react";

export const Component01 = ({nombre, apellido, ficha}) => {

    return(
        <div>
            <h1>Componente con Props</h1>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )

}

export default Component01