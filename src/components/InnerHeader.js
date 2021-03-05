import React from 'react'
import { useHistory } from "react-router-dom";
import LogoVector from '../img/LogoVector.png'
import logout from '../img/logout.png'

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

    return (
        <>
            <img className="btnLogout" src={logout} alt='Sair' onClick={routerLogout} />
            <div className='divNavbar'>
                <img className="LogoOrder" alt="logotipo Vegan Queen" src={LogoVector} />
                <form className="Order">
                    <div className="Professional">
                        <p className="TextsProf">Olá, {professional}</p>

                    </div>
                </form>
            </div>
        </>
    )
}

export default InnerHeader;