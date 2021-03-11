import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom'
import InnerHeader from './InnerHeader';
import Loading from './Loading'
import home from '../img/home.png'

const Historic = () => {
  const token = localStorage.getItem("token")
  const [order, setOrder] = useState('')
  const ordersList = useRef(false);
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
        const order = json
          .filter(item => item.status === `Entregue`)
          .map(item => {
            item.Products.map(item => {
              if (item.flavor === "carne" & item.complement === "queijo") {
                item.flavor = "sabor beterraba e feijão"
                item.complement = "Com queijo de castanhas"
              } else if (item.flavor === "carne" & item.complement === "ovo") {
                item.flavor = "sabor beterraba e feijão"
                item.complement = "Com ovo vegetal"
              } else if (item.flavor === "carne") {
                item.flavor = "sabor beterraba e feijão"
              } else if (item.flavor === "frango" & item.complement === "queijo") {
                item.flavor = "sabor shimeji e paris"
                item.complement = "Com queijo de castanhas"
              } else if (item.flavor === "frango" & item.complement === "ovo") {
                item.flavor = "sabor shimeji e paris"
                item.complement = "Com ovo vegetal"
              } else if (item.flavor === "frango") {
                item.flavor = "sabor shimeji e paris"
              } else if (item.flavor === "vegetariano" & item.complement === "queijo") {
                item.flavor = "sabor falafel"
                item.complement = "Com queijo de castanhas"
              } else if (item.flavor === "vegetariano" & item.complement === "ovo") {
                item.flavor = "sabor falafel"
                item.complement = "Com ovo vegetal"
              } else if (item.flavor === "vegetariano") {
                item.flavor = "sabor falafel"
              } else if (item.name === "Café com leite") {
                item.name = "Café com leite vegetal"
              } else if (item.name === "Misto quente") {
                item.name = "Sanduiche natural"
              } else if (item.name === "Café americano") {
                item.name = "Café puro"
              }
              return item
            })
            return item
          })
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
  }, [getOrders]);

  return (
    <>
      <InnerHeader />
      <Link to={'/kitchen'}>
        <img className="btnHome" alt="botão para salão" src={home} type="submit"/>
      </Link>
      <div className="kitchen">
        {loading ?
          (
            <Loading />
          ) : (
            < div className="ordersList">
              {order && order.map(function (item) {
                return (
                  <div className="EachOrderHistoric eachDetail" key={item.id}>
                    <p>Status: {item.status} | Cliente: {item.client_name} | Mesa: {item.table}</p>
                    <p>Data e hora: {item.createdAt}</p>
                    <div className="printScreennameProduct">Produtos: {item.Products.map(function (product, index) {
                      return (
                        <div key={`${item.id}-${index}`}>
                          <p>{product.name} {product.flavor} {product.complement} - Quantidade: {product.qtd}</p>
                        </div>
                      )
                    })}
                    </div>
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