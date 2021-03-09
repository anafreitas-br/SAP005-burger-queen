import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import InnerHeader from '../components/InnerHeader';
import Command from './Command';
import Loading from '../components/Loading';
import home from '../img/home.png'

const Burger = () => {

  const token = localStorage.getItem('token')
  const [menuBurger, setMenuBurger] = useState('');
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
        const burger = json
          .filter(item => item.type === 'all-day')
          .map(item => {
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
            }
            return item
          })
        setMenuBurger(burger)
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      })
  }, [token]);

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
        flavor: item.flavor,
        complement: item.complement,
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
              {menuBurger &&
                menuBurger.map(function (item) {
                  return (
                    <div
                      className="printScreen"
                      key={item.id}
                    >
                      <p>{item.name} {item.flavor}</p>
                      <p>{item.complement}</p>
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

export default Burger;
