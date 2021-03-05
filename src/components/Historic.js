import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button';
import InnerHeader from './InnerHeader';
import Loading from './Loading'

const Historic = () => {
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    const [order, setOrder] = useState('')
    const ordersList = useRef(false);
    const [roleBack, setRoleBack] = useState('')
    const [loading, setLoading] = useState(true)

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
    }, [getOrders]);


    useEffect(() => {
        fetch(`https://lab-api-bq.herokuapp.com/users/${id}`, {
            headers: {
                "accept": "application/json",
                "Authorization": `${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.role === "kitchen") {
                    setRoleBack('./kitchen')
                } else {
                    setRoleBack('./hall')
                }
            })
            // eslint-disable-next-line
    }, [roleBack])

    return (
        <>
            <InnerHeader />
            <Link to={roleBack}>
                <Button type="submit">Home</Button>
            </Link>
            <div className="kitchen">
                {loading ?
                    (
                        <Loading />
                    ) : (
                        < div className="ordersList">
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

export default Historic;