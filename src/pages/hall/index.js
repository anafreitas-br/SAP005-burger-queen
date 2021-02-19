import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import LogoVector from '../../img/LogoVector.png'

const Hall = () => {
    
    const history = useHistory();
    const [professional, setProfessional] = useState('');
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const keepClient = (event) => {
        localStorage.setItem("client", client);
        localStorage.setItem("table", table)
    }

    const routerLogout = () => {
        const logoutConfirm = window.confirm('Deseja fazer logout ?');
        if (logoutConfirm === true) {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            history.push('/')
        } 
    }

    fetch(`https://lab-api-bq.herokuapp.com/users/${id}`,{
    headers:{ 
    "accept": "application/json",
    "Authorization":`${token}`},    

    })
    .then((response) => response.json())
    .then((json) => {  
        setProfessional(json.name)
    }) 


    return (
        <>
            <img className="Logo" alt ="logotipo Vegan Queen" src={LogoVector}/>
                <form className="Order">
                    <p className="Texts">{professional}</p>
                    <div className="Group">
                    <button className="Button" type="submit" onClick={routerLogout}>Sair</button>
                    <p className="Texts"> Cliente <span className='required'> *</span> </p>
                        <input name="client" className="FieldOrder" placeholder="nome" value={client} onChange={(e) => setClient(e.target.value)}/>
                    </div>
                    <div className="Group">
                    <p className="Texts"> Mesa  <span className='required'> *</span> </p>
                        <input type="number" name="table" className="FieldOrder" placeholder="n°..." value={table} onChange={(e) => setTable(e.target.value)} />
                    </div>
                    <button className="Button" type="submit" onClick={keepClient}>Ok</button>
                    <p className="Texts"> <Link to='/breakfast' className="Button-back" >Café da manhã</Link></p>
                    <p className="Texts"> <Link to='/burger'className="Button-back" >Lanches</Link></p>
                </form>
        </>
    )

}

export default Hall;

