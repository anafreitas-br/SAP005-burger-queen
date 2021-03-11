import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import Modal from './Modal';
import { Button } from '../components/Button/Button';

const Command = ({ pedido, setPedido }) => {
  const history = useHistory();
  const token = localStorage.getItem("token")
  const [sum, setSum] = useState(0);
  const client = localStorage.getItem("client");
  const table = localStorage.getItem("table");
  const sumList = useRef(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [warning, setWarning] = useState('');

  const sumOrder = useCallback(async () => {
    let somar = 0;
    pedido.map(item => {
      let add = Number(item.price) * Number(item.qtd)
      somar += add;
      return setSum(somar)
    })
  }, [pedido])

  useEffect(() => {
    if (!sumList.current) {
      sumOrder();
      sumList.current = true;
    }
    return () => { sumList.current = false }
  }, [sumOrder]);

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
              "qtd": Number(item.qtd)
            }
          ))
      })
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === undefined) {
          localStorage.removeItem("client")
          localStorage.removeItem("table")
          setWarning("Pedido enviado com sucesso")
          setIsModalVisible(true)
        } else {
          setWarning(json.message)
          setIsModalVisible(true)
        }
      })
  }

  const subtraction = (item) => {
    if (item.qtd > 1) {
      const newValue = item.qtd--;
      setPedido(obj => [...obj, newValue]);
    } else if (item.qtd === 1) {
      const index = pedido.indexOf(item)
      const newValue = pedido.splice(index, 1)
      setPedido(newValue);
    }
    setPedido([...pedido]);
  }

  const close = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
    history.push('/hall')
  }

  return (
    <>
      <div className="Command">
        <h3>Comanda</h3>
        <div className="CommandDetails">
          {pedido && pedido.map(function (item) {
            return (
              <div className="commandScreen eachDetail" key={item.id}>
                <p>{item.name} {item.flavor}</p>
                <p>{item.complement}</p>
                <p>Qtd: {item.qtd} R$ {item.price},00 {' '}
                <Button onClick={() => subtraction(item)}>-</Button></p>
              </div>
            );
          })}
          <p className="eachDetail">Total: {sum}</p>
        </div>
        <Button type="submit" onClick={handleSubmit}>Finalizar pedido</Button>
      </div>
      <div className="modalC">
        {isModalVisible ? (
          <Modal onClose={(e) => close(e)}>
            <h1>{warning}</h1>
          </Modal>
        ) : null}
      </div>
    </>
  )
}

export default Command
