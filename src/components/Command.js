import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import { Button } from '../components/Button/Button';

const Command = ({ pedido, setPedido }) => {
    const token = localStorage.getItem("token")
    const [sum, setSum] = useState(0);
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [warning, setWarning] = useState('');

    useEffect(() => {
        let somar = 0;
        pedido.forEach(item => {
            let add = Number(item.price) * Number(item.qtd)
            somar += add;
        })
        setSum(somar)
    }, [pedido])

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
                    setPedido('')
                } else {
                    setWarning(json.message)
                    setIsModalVisible(true)
                }
            })
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
                                <p>Qtd: {item.qtd} R$ {item.price},00</p>
                            </div>
                        );
                    })}
                    <p>___________________________________</p>
                    <p className="eachDetail">Total: {sum}</p>
                    <br></br>
                    <br></br>
                </div>
                <Button type="submit" onClick={handleSubmit}>Finalizar pedido</Button>
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

export default Command
