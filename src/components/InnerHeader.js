import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from '../components/Button/Button';
import LogoVector from '../img/LogoVector.png'
import Client from '../components/Client'
import NavBar from "./Navbar/Navbar"


const InnerHeader = ({professional}) => {
    const history = useHistory();

        const routerLogout = () => {
            const logoutConfirm = window.confirm('Deseja fazer logout ?');
            if (logoutConfirm === true) {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("professional")
            history.push('/')
        } 
    }


    

    return (
        <>
            <img className="LogoOrder" alt ="logotipo Vegan Queen" src={LogoVector}/> 
            <NavBar/>
            <form className="Order">
                <div className="Group">
                    <p className="Texts">Olá, {professional}</p>
                    <Button onClick={routerLogout}>Sair</Button> 
                </div>
                <Client/>
            </form>
            
        </>
    )
}

export default InnerHeader;