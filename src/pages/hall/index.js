import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../../components/InnerHeader'
import Burger from '../../components/Burger'
import Breakfast from '../../components/Breakfast'
import Historic from '../../components/Historic'
import OrderKitchen from '../../components/OrderKitchen'
import lanches from '../../img/lanches.png'
import historico from '../../img/historico.png'
import { Button } from '../../components/Button/Button'


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
                <div className="Group">
                    <p className="Texts">Cliente: {client}</p>
                    <p className="Texts">Mesa: {table}</p>
                </div>
                <div className="Group">
                    <p className="Texts"> Cliente <span className='required'> *</span>
                        <input name="client" className="FieldOrder" placeholder="nome" value={client} onChange={(e) => setClient(e.target.value)} /></p>
                    <p className="Texts"> Mesa <span className='required'> *</span>
                        <input type="number" name="table" className="FieldOrder" placeholder="n°..." value={table} onChange={(e) => setTable(e.target.value)} /></p>
                </div>
            </form>
            <div className="orderDay">
                <Link to='/burger'>
                    <img className="Button" alt="botão para menu lanches" src={lanches} type="submit" onClick={(() => <Burger />)} />
                </Link>

                <Link to='/breakfast'>
                    <Button type="submit" onClick={(() => <Breakfast />)}>Café da Manhã</Button>
                </Link>

                <Link to='/orderkitchen'>
                    <Button type="submit" onClick={(() => <OrderKitchen />)}>Pedidos Prontos</Button>
                </Link>

                <Link to='/historic'>
                    <img className="Button" alt="botão para histórico de pedidos " src={historico} type="submit" onClick={(() => <Historic />)} />
                </Link>
            </div>

        </>
    )
}

export default Hall;