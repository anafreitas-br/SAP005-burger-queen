
import React, { useState } from 'react'
import Modal from './Modal/Modal'
import { Button } from '../components/Button/Button';

const Command = ({ pedido }) => {
    const token = localStorage.getItem("token")
    const [sum, setSum] = useState(0);
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");
	  const [isModalVisible, setIsModalVisible] = useState(true);
    const [warning, setWarning] =useState('');

    const sumOrder = () => {
        let somar = 0;
        pedido.forEach(item => {
            let add = Number(item.price)
            somar += add;
        })
        setSum(somar)
    }

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
                            "qtd": 1
                        }
                    ))
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message === undefined) {
                     localStorage.removeItem("client")
                     localStorage.removeItem("table")
                     setWarning("pedido enviado com sucesso")
                     setIsModalVisible(true)
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
                            <div className="commandScreen" key={item.id}>
                                <p className="eachDetail">{item.name}</p>
                                <p className="eachDetail">{item.flavor} </p>
                                <p className="eachDetail">{item.complement}</p>
                                <p className="eachDetail">R$ {item.price},00</p>
                            </div>
                        );
                    })}
                    <p className="sumTotal">Total: {sum}</p>
                    <br></br>
                    <br></br>
                </div>         
                <Button type="submit" onClick={sumOrder}>Somar</Button>
                <Button type="submit" onClick={handleSubmit}>Finalizar pedido</Button>
            </div>
            <div className="modalC">
					{isModalVisible ? (
						<Modal value={warning} onClose={()=> setIsModalVisible(false)}>
							<h1>{warning}</h1>
                            <Button>Ok</Button>
						</Modal>
					) : null}
				</div> 
        </>
    )
}

export default Command
