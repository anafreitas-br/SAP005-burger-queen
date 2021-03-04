import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Button } from '../components/Button/Button';
import LogoVector from '../img/LogoVector.png'

const InnerHeader = () => {
    const history = useHistory();
    const professional = localStorage.getItem("name");

    const routerLogout = () => {
        const logoutConfirm = window.confirm('Deseja fazer logout ?');
        if (logoutConfirm === true) {
            localStorage.clear();
            history.push('/')
        }
    }

    useEffect(() => {
        document.title = "Vegan Queen"
    }, [])

    return (
        <>
            <div className='divNavbar Group'>
                <img className="LogoOrder" alt="logotipo Vegan Queen" src={LogoVector}/>
                <p className="Texts">Olá, {professional}</p>
                <Button onClick={routerLogout}>Sair</Button>
            </div>
        </>
    )
}

export default InnerHeader;