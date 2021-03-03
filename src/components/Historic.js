import React, { useState, useEffect, useRef, useCallback } from 'react';
import InnerHeader from './InnerHeader';

const Historic = () => {
    const professional = localStorage.getItem("name")
    const token = localStorage.getItem("token")
    const [order, setOrder] = useState('')
    const ordersList = useRef(false);


    const getOrders = useCallback(async () => {
        fetch("https://lab-api-bq.herokuapp.com/orders", {
            headers: {
                "accept": "application/json",
                "Authorization": `${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const order = json.filter(item => item.status === `Entregue`)
                setOrder(order)
            })
            // eslint-disable-next-line
    }, [ order, token])

    useEffect(() => {
        if (!ordersList.current) {
            getOrders();
            ordersList.current = true;
        }
        return () => { ordersList.current = false }
    }, [getOrders]);

    return (
        <>
            <InnerHeader professional={professional}/>
            <div className="kitchen">
                <div className="ordersList">
                    {order && order.map(function (item) {
                        return (
                            <div className="EachOrder" key={item.id}>
                                <p>Status: {item.status}</p>
                                <p>Cliente: {item.client_name} Mesa: {item.table}</p>
                                <p>Data e hora: {item.createdAt}</p>
                                <div>Produtos: {item.Products.map(function (product) {
                                    return (
                                        <div>
                                            <p>{product.name} {product.flavor} {product.complement} - Quantidade: {product.qtd}</p>
                                        </div>
                                    )
                                })}
                                </div>
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

export default Historic;