import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '../components/Button/Button';
import InnerHeader from './InnerHeader';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Modal from './Modal/Modal';


const OrderKitchen = () => {
    const professional = localStorage.getItem("name");
    const token = localStorage.getItem("token");
    const [order, setOrder] = useState('');
    const ordersList = useRef(false);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [warning, setWarning] = useState('');

    const handleSubmit = (itemId) => {
        fetch(`https://lab-api-bq.herokuapp.com/orders/${itemId}`, {
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
                "status": `Entregue`
            })
        })
            .then((response) => response.json())
            .then(() => {
                setWarning("Pedido finalizado com sucesso")
                setIsModalVisible(true)
            })
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
                const order = json.filter(item => item.status === `pronto`)
                setOrder(order)
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
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
    }, [getOrders]);

    return (
        <>
            <InnerHeader professional={professional} />
            <Link to='./hall'>
                <Button type="submit">Home</Button>
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
                                        <Button onClick={() => handleSubmit(item.id)}>Pedido Entregue</Button>
                                ______________________________________________________
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )}
            </div>
            <div className="modalC">
                {isModalVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)}>
                        <h1>{warning}</h1>
                    </Modal>
                ) : null}
            </div>
        </>
    )
}

export default OrderKitchen;