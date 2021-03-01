import React, {useEffect} from 'react'
import { useHistory, Link } from "react-router-dom";
import { Button } from '../components/Button/Button';
import LogoVector from '../img/LogoVector.png'



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
            <Link to = './hall'>
            <Button type="submit">Voltar</Button>
            </Link>

            <div className='divNavbar'>
                <img className="LogoOrder" alt="logotipo Vegan Queen" src={LogoVector} />
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