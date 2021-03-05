import React from 'react'
import LogoVector from '../img/LogoVector.png'

const OutHeader = ({ message }) => {

    return (
        <>
            <img className="Logo" alt="logotipo Vegan Queen" src={LogoVector} />
            <h1 className="Title">{message}</h1>
            <p className="Texts">Preencha os campos abaixo</p>
        </>
    )
}

export default OutHeader;