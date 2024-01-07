import React from "react";
// Se importa proptypes para hacer las validaciones de los datos
import PropTypes from "prop-types";

export const Component01 = ({nombre, apellido, ficha}) => {

    return(
        <div>
            <h1>Componente con Props</h1>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.factor}</li>
            </ul>
        </div>
    )

}

//Se genera una función con los datos a validar
Component01.propTypes = {
    //Con el isrequired hacemos que si o si sea una exigencia el tipo string para que funcione el programa, sino tira error
    nombre: PropTypes.string.isRequired,
    //Si solo tiene el tipo string, pero no is required, entonces no funciona pero tampoco manda el mensaje de error
    apellido: PropTypes.string,
    ficha: PropTypes.object
}

export default Component01