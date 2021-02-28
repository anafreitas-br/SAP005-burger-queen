import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Button } from '../components/Button/Button';
import LogoVector from '../img/LogoVector.png'
import NavBar from "./Navbar/Navbar"


const InnerHeader = ({professional, client, table}) => {
    const history = useHistory();

        const routerLogout = () => {
            const logoutConfirm = window.confirm('Deseja fazer logout ?');
            if (logoutConfirm === true) {
            localStorage.clear();
            history.push('/')
        } 
    }

    useEffect(() => {
        document.title= "Vegan Queen"
    }, [])

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
                <div className="Group">
                    <p className="Texts">Cliente: {client}</p>
                    <p className="Texts">Mesa: {table}</p>
                </div>
            </form>
            

        </>
    )
}

export default InnerHeader;