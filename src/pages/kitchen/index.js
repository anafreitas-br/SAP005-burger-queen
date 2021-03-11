import React, { useState, useEffect, useRef, useCallback } from 'react';
import InnerHeader from '../../components/InnerHeader';
import Historic from '../../components/Historic';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { Button } from '../../components/Button/Button';
import historico from '../../img/historico.png'
import Modal from '../../components/Modal/Modal'
import Footer from '../../components/Footer'

const Kitchen = () => {
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
        "status": `pronto`
      })
    })
      .then((response) => response.json())
      .then(() => {
        setWarning("Pedido enviado para o salão")
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
        const order = json.filter(item => item.status === `pending`)
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
      <InnerHeader />
      <Link to='/historic'>
        <img className="ButtonHistoric" alt="botão para histórico de pedidos " src={historico} type="submit" onClick={(() => <Historic />)} />
        <figcaption><strong>Histórico</strong></figcaption>
      </Link>
      <div className="kitchen">
        {loading ?
          (
            <Loading />
          ) : (
            <div className="ordersList">
              {order && order.map(function (item) {
                return (
                  <div className="EachOrder eachDetail" key={item.id}>
                    <p>Status: {item.status} | Cliente: {item.client_name} | Mesa: {item.table}</p>
                    <p>Data e hora: {item.createdAt}</p>
                    <div className="printScreennameProduct">Produtos: {item.Products.map(function (product) {
                      return (
                        <div key={item.id}>
                          <p>{product.name} {product.flavor} {product.complement} - Quantidade: {product.qtd}</p>
                        </div>
                      )
                    })}
                    </div>
                    <Button onClick={() => handleSubmit(item.id)}>Está Pronto</Button>
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
      <Footer/>
    </>
  )
}

export default Kitchen;
