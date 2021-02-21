import React from 'react'
import { useHistory } from "react-router-dom";
import LogoVector from '../img/LogoVector.png'
import Client from '../components/Client'

const InnerHeader = ({professional, client, table}) => {

    const routerLogout = () => {
        const logoutConfirm = window.confirm('Deseja fazer logout ?');
        if (logoutConfirm === true) {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("professional")
            history.push('/')
        } 
    }

    const history = useHistory();

    return (
        <>
            <img className="LogoOrder" alt ="logotipo Vegan Queen" src={LogoVector}/>
            <form className="Order">
                <div className="Group">
                <p className="Texts">Olá, {professional}</p>
                <button className="Button" type="submit" onClick={routerLogout}>Sair</button>
                </div>
                <Client/>
            </form>
        </>
    )
}

export default InnerHeader;