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
            localStorage.clear();
            history.push('/')
        } 
    }

    return (
        <>
        <Button onClick={routerLogout}>Sair</Button>
        <div className='divNavbar'>
            <img className="LogoOrder" alt ="logotipo Vegan Queen" src={LogoVector}/> 
            <NavBar/>
            </div>
            <form className="Order">
                <div className="Group">
                    <p className="Texts">Olá, {professional}</p>
                </div>
                <br></br>
                <br></br>
                <Client/>
            </form>
            

        </>
    )
}

export default InnerHeader;