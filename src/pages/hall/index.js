import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../../components/InnerHeader'
import Burger from '../../components/Burger'
import Breakfast from '../../components/Breakfast'
import Historic from '../../components/Historic'
import OrderKitchen from '../../components/OrderKitchen'
import lanches from '../../img/lanches.png'
import historico from '../../img/historico.png'
import prontos from '../../img/prontos.png'
import café from '../../img/café.png'
import './Hall.css'

const Hall = () => {

    const [client, setClient] = useState('');
    const [table, setTable] = useState('');

    useEffect(() => {
        localStorage.setItem("client", client)
        localStorage.setItem("table", table)
    }, [client, table])

    return (
        <>
            <InnerHeader />
            <form className="Order">

            <div className="Inputs">
                    <p className="Texts"> Cliente <span className='required'> *</span>
                        <input name="client" className="FieldOrder" placeholder="nome" value={client} onChange={(e) => setClient(e.target.value)} /></p>
                    <p className="Texts"> Mesa <span className='required'> *</span>
                        <input type="number" name="table" className="FieldOrder" placeholder="n°..." value={table} onChange={(e) => setTable(e.target.value)} /></p>
                </div> 
                <div className="ClientsTable">            
                    <p className="Client">Cliente: {client}</p>
                    <p className="Table">Mesa: {table}</p>
                </div>
            </form>
            <div className="orderDay">
                <Link to='/burger'>
                    <img id="VQ" className="Button" alt="botão para menu lanches" src={lanches} type="submit" onClick={(() => <Burger />)}/> 
                    <figcaption className="legend"><strong>Lanches</strong></figcaption>
                </Link>
                <Link to='/breakfast'>
                    <img className="Button" alt="botão para menu Café" src={café} type="submit" onClick={(() => <Breakfast />)}/>
                    <figcaption><strong>Café-da-Manhã</strong></figcaption>
                </Link>
                <Link to='/orderkitchen'>
                    <img className="Button" alt="botão para os pedidos prontos" src={prontos} type="submit" onClick={(() => <OrderKitchen />)}/>
                        <figcaption><strong>Está Pronto!</strong></figcaption>
                </Link>
                <Link to='/historic'>
                    <img className="Button" alt="botão para histórico de pedidos " src={historico} type="submit" onClick={(() => <Historic />)}/>
                    <figcaption><strong>Histórico</strong></figcaption>
                </Link>
            </div>

        </>
    )
}

export default Hall;