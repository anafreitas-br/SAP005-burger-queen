import React, { useState } from 'react'
import InnerHeader from '../../components/InnerHeader';

const Command = () => {

    const professional = localStorage.getItem("name");
    const token = localStorage.getItem("token")
    const pedido = JSON.parse(localStorage.getItem("pedido"));
    const [sum, setSum] = useState(0);
    

    // APAGAR DEPOIS DE VIRAR COMPONENTE
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://lab-api-bq.herokuapp.com/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                "client": client,
                "table": table, 
                "products": 
                pedido.map((item) => (
                    {
                        "id": Number(item.objeto.id),
                        "qtd": 1
                    }
                ))
            })
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
        })
    }

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
            <button className="Button" type="submit" onClick={handleSubmit}>Finalizar pedido</button> 
        </div>
        </>
    )
}

export default Command