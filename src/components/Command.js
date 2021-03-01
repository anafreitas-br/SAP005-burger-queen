import React, { useState } from 'react'

const Command = () => {

    
    const token = localStorage.getItem("token")
    const pedido = JSON.parse(localStorage.getItem("pedido"));
    const [sum, setSum] = useState(0);

    // APAGAR DEPOIS DE VIRAR COMPONENTE
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");

    const sumOrder = () => {
        let somar = 0;
        pedido.forEach(item => {
            console.log(pedido)
            let add = Number(item.objeto.price)
            console.log(add)
            somar += add;
        })

        setSum( somar )
        console.log(somar)
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
        <h3>Comanda</h3>
            <div className="CommandDetails">
                {pedido && pedido.map(function (item) {
                    return (
                        <div className="commandScreen">
                            <p className="eachDetail">{item.objeto.name}</p> 
                            <p className="eachDetail">{item.objeto.flavor} </p>
                            <p className="eachDetail">{item.objeto.complement}</p>
                            <p className="eachDetail">R$ {item.objeto.price},00</p>
                        </div>
                    );
                })}
               
                <p className="sumTotal">{sum}</p>
                <br></br>
                <br></br>
        
            </div>
            <button className="Button" type="submit" onClick={sumOrder}>Somar</button> 
            <button className="Button" type="submit" onClick={handleSubmit}>Finalizar pedido</button> 
        </div>
        </>
    )
}

export default Command
















