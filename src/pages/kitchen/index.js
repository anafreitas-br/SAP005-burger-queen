import React, { useState, useEffect, useRef, useCallback } from 'react';
import InnerHeader from '../../components/InnerHeader';
import Historic from '../../components/Historic';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { Button } from '../../components/Button/Button';

const Kitchen = () => {
    const token = localStorage.getItem("token")
    const [order, setOrder] = useState('')
    const ordersList = useRef(false);
    const [loading, setLoading] = useState(true)

    const handleSubmit = (itemId) => {
        fetch(`https://lab-api-bq.herokuapp.com/orders/${itemId}`, {
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
                "status": `pronto`
            })
        })
            .then((response) => response.json())
    }

    const getOrders = useCallback(async () => {
        fetch("https://lab-api-bq.herokuapp.com/orders", {
            headers: {
                "accept": "application/json",
                "Authorization": `${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const order = json.filter(item => item.status === `pending`)
                setOrder(order)
                setLoading(false)
            })
        // eslint-disable-next-line
    }, [order, token])

    useEffect(() => {
        if (!ordersList.current) {
            getOrders();
            ordersList.current = true;
        }
        return () => { ordersList.current = false }
        // eslint-disable-next-line
    }, [ordersList]);

    return (
        <>
            <InnerHeader />
            <Link to='/historic'>
                <Button type="submit" onClick={(() => <Historic />)}>Histórico</Button>
            </Link>
            <div className="kitchen">
                {loading ?
                    (
                        <Loading />
                    ) : (
                        <div className="ordersList">
                            {order && order.map(function (item) {
                                return (
                                    <div className="EachOrder" key={item.id}>
                                        <p>Status: {item.status}</p>
                                        <p>Cliente: {item.client_name} Mesa: {item.table}</p>
                                        <p>Data e hora: {item.createdAt}</p>
                                        <div>Produtos: {item.Products.map(function (product) {
                                            return (
                                                <div key={item.id}>
                                                    <p>{product.name} {product.flavor} {product.complement} - Quantidade: {product.qtd}</p>
                                                </div>
                                            )
                                        })}
                                        </div>
                                        <Button onClick={() => handleSubmit(item.id)}>Está Pronto</Button>
                                ______________________________________________________
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )}
            </div>
        </>
    )
}

export default Kitchen;
