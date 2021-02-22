import React, { useState } from 'react'
import InnerHeader from '../../components/InnerHeader'
import './Hall.css'

const Hall = () => {

    const [professional, setProfessional] = useState('');
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const keepClient = () => {
        localStorage.setItem("client", client);
        localStorage.setItem("table", table);
    }

    fetch(`https://lab-api-bq.herokuapp.com/users/${id}`,{
    headers:{ 
    "accept": "application/json",
    "Authorization":`${token}`},    
    })
    .then((response) => response.json())
    .then((json) => {  
        setProfessional(json.name)
        localStorage.setItem("name", json.name)
    }) 

    return (
        <>
            <InnerHeader professional={professional} client={client} table={table}/>
            <form className="Order">
                <div className="Group">

                    <br></br>
                    <br></br>
                    <p className="Texts"> Cliente <span className='required'> *</span> 
                    <input name="client" className="FieldOrder" placeholder="nome" value={client} onChange={(e) => setClient(e.target.value)}/></p>
                </div>
                <div className="Group">
                    <p className="Texts"> Mesa  <span className='required'> *</span>  
                    <input type="number" name="table" className="FieldOrder" placeholder="n°..." value={table} onChange={(e) => setTable(e.target.value)} /></p>
                </div>
                <button className="Button" type="submit" onClick={keepClient}>Registrar</button>

              
            </form>
        </>
    )
}

export default Hall;