import React, { useState, useEffect } from 'react';
import InnerHeader from '../../components/InnerHeader';

const Kitchen = () => {
    const token = localStorage.getItem("token")
    const [order, setOrder] = useState('')

    useEffect(() => {
            fetch("https://lab-api-bq.herokuapp.com/orders", {
                headers: {
                    "accept": "application/json",
                    "Authorization": `${token}`
                },
                
            })
            .then((response) => response.json())
            .then((json) => {
                //const order = json.filter(item => item.status === status)
                console.log(json)
                setOrder(json)
            })
    }, [])


        
        
    return (
        <>
            <InnerHeader />
            <div className="kitchen">
                <div className="ordersList">
                    {order && order.map(function (item) {
                        return (
                            <div className="EachOrder" onClick={console.log("clicou")}>
                                <p>Status: {item.status}</p>
                                <p>Cliente: {item.client_name} Mesa: {item.table}</p>
                                <p>Data e hora: {item.createdAt}</p>
                                <button className="Button">Está Pronto</button>
                                ______________________________________________________
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default Kitchen;
