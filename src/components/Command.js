import React, { useState } from 'react'

const Command = ({ pedido, setPedido }) => {

    const token = localStorage.getItem("token")
    const [sum, setSum] = useState(0);
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");

    const sumOrder = () => {
        let somar = 0;
        pedido.forEach(item => {
            let add = Number(item.price)
            somar += add;
        })
        setSum(somar)
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
                            "id": Number(item.id),
                            "qtd": 1
                        }
                    ))
            })
        })
            .then((response) => response.json())
            .then((json) => {
                localStorage.removeItem("pedido")
                localStorage.removeItem("client")
                localStorage.removeItem("table")
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
                            <div className="commandScreen" key={item.id}>
                                <p className="eachDetail">{item.name}</p>
                                <p className="eachDetail">{item.flavor} </p>
                                <p className="eachDetail">{item.complement}</p>
                                <p className="eachDetail">R$ {item.price},00</p>
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

//     const [valueDelect, setValueDelect] = useState ()
//     const [totalValor, setTotalValor] = useState ()
//     const delProduct = (item, pedido) => {
//     pedido.splice(pedido.indexOf(item), 1)
//     const value = item.price
//     console.log(value)
//     setValueDelect(valueDelect - value)
//     setTotalValor(totalValor - Number(item.price))
// }