import React from 'react';
import './styles.css';


const Input = ({valorPlaceholder}) => {

    console.log(valorPlaceholder);
    return(
        <input placeholder= {valorPlaceholder}
        className='app-input'
        />
    )
}

export default Input;