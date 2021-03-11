import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import InnerHeader from './InnerHeader';
import Command from './Command';
import Loading from '../components/Loading';
import home from '../img/home.png'

const Breakfast = () => {

  const token = localStorage.getItem("token")
  const [menu, setMenu] = useState('');
  const [pedido, setPedido] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `${token}`
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const breakfast = json
          .filter(item => item.type === 'breakfast')
          .map(item => {
            if (item.name === "Café com leite") {
              item.name = "Café com leite vegetal"
            } else if (item.name === "Misto quente") {
              item.name = "Sanduiche natural"
            } else if (item.name === "Café americano") {
              item.name = "Café puro"
            }
            return item
          })
        setMenu(breakfast)
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      })
  }, [token])

  const adicionar = (item) => {
    const jaTemItem = pedido.find((itemPedido) => itemPedido.id === item.id);
    if (jaTemItem) {
      const newValue = pedido.map((itemPedido) => {
        if (itemPedido.id === item.id) {
          return {
            ...itemPedido,
            qtd: itemPedido.qtd + 1
          }
        }
        return itemPedido
      })
      setPedido(newValue)
    } else {
      const objeto = {
        id: item.id,
        name: item.name,
        price: item.price,
        qtd: 1
      }
      setPedido(obj => [...obj, objeto])
    }
  };

  return (
    <>
      <InnerHeader />
      <Link to="/hall">
        <img className="btnHome" alt="botão para salão" src={home} type="submit" onClick={(() => "/hall")} />
      </Link>
      <div>
        {loading ?
          (
            <Loading />
          ) : (
            <div>
              {menu &&
                menu.map(function (item) {
                  return (
                    <div
                      className="printScreen"
                      key={item.id}
                    >
                      <p>{item.name}</p>
                      <p>R$ {item.price},00 {' '}
                        <Button type="submit" onClick={() => adicionar(item)}>+</Button></p>
                    </div>
                  );
                })}
              <Command pedido={pedido} setPedido={setPedido} />
            </div>
          )}
      </div>
   
    </>
  );
}

export default Breakfast;









