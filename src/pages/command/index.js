
import React, { useState, useEffect } from 'react'
import InnerHeader from '../../components/InnerHeader';
import Burger from '../burger/index'

const Command = () => {

    const professional = localStorage.getItem("name");
    const pedido = JSON.parse(localStorage.getItem('pedido'));
    const [sum, setSum] = useState(0);

    const sumOrder = () => {
        const soma = document.getElementById("soma")
        pedido.forEach(item => {
            let add = Number(item.objeto.price)
            setSum(add = add + sum)
            soma.innerText = `
            <p> ${sum} oi </p>
            `
        })
    }

    // const [orders, setOrders] = useState([]);

    
    // const addOrder= (item) => {
    //     const listOrder = orders
    //     listOrder.push(item)
    //     setOrders(listOrder)
    //     sumOrder()
    // }

    return (
        <>
        <div className="Command">
            <InnerHeader professional={professional} />
             <div className="CommandDetails">
                {pedido.map(function (item) {
                    return (
                        <div className="commandScreen">
                            <p className="eachDetail">{item.objeto.name}</p> 
                            <p className="eachDetail">{item.objeto.flavor} </p>
                            <p className="eachDetail">{item.objeto.complement}</p>
                            <p className="eachDetail">R$ {item.objeto.price},00</p>
                            <button className="btnDel" onClick={console.log("clicou")}> - </button>
                        </div>
                    );
                })}
                <p id="soma"></p>
                <button onclick={sumOrder}>Somar</button>
                <button className="btnFinal">Finalizar</button>
            </div>
        </div>
        </>
    )
}

export default Command