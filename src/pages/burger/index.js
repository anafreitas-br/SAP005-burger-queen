import React, { useEffect, useState } from 'react';
import InnerHeader from '../../components/InnerHeader';

const Burger = () => {

    const token = localStorage.getItem('token')
    const [menuBurger, setMenuBurger] = useState('');
    const professional = localStorage.getItem("name");

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const burger = json.filter(item => item.type === 'all-day')
                setMenuBurger(burger)
            })
    })

    const adicionar = (event) => {
        event.preventDefault();
        const parent = event.target.parentNode.parentNode;
        const complement = parent.getAttribute("complement");
        const flavor = parent.getAttribute('flavor');
        const id = parent.getAttribute('id');
        const name = parent.getAttribute('name');
        const price = parent.getAttribute('price');
        const objeto ={
            id: id,
            nome: name,
            flavor: flavor,
            complement: complement,
            price: price
        }
        let pedido = new Array([0]);
        if (localStorage.hasOwnProperty("pedido")) {
            pedido = JSON.parse(localStorage.getItem("pedido"))
        }
        pedido.push({objeto})
        localStorage.setItem("pedido", JSON.stringify(pedido))
    }

    
    return (
        <div className="Burger">
            <InnerHeader professional={professional} />
            <div className="MenuBurger">
                {menuBurger && menuBurger.map(function (item) {
                    return (
                        <div className="printScreen" name={item.name} id={item.id} price={item.price} complement={item.complement} flavor={item.flavor}>
                            <p className="nameProduct">{item.name} {item.flavor} {item.complement} R$ {item.price},00
                            <button className="btnAdd" onClick={adicionar}> Adicionar</button></p>
                        </div>
                    );
                })}
                <button className="btnFinal">Finalizar</button>
            </div>
        </div>
    );
}



export default Burger;