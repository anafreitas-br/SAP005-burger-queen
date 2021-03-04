import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import InnerHeader from './InnerHeader';
import Command from './Command';
import Loading from '../components/Loading';

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
                const breakfast = json.filter(item => item.type === 'breakfast')
                breakfast.forEach(item => {
                    if (item.name === "Café com leite") {
                        item.name = "Café com leite vegetal"
                    } else if (item.name === "Misto quente") {
                        item.name = "Sanduiche natural"
                    } else if (item.name === "Café americano") {
                        item.name = "Café puro"
                    }
                })
                setMenu(breakfast)
                setLoading(false)
            })
    }, [token])



    const adicionar = (event) => {
        event.preventDefault();
        const parentOrder = event.target.parentNode.parentNode;
        const id = parentOrder.getAttribute('id');
        const name = parentOrder.getAttribute('name');
        const price = parentOrder.getAttribute('price');

        const objeto = {
            id: id,
            name: name,
            price: price,
            qtd: 1
        }
        setPedido(obj => [...obj, objeto])
    };

    return (
        <>
            <InnerHeader />
            <Link to='./hall'>
                <Button type="submit">Home</Button>
            </Link>
            <div className="Breakfast">
                {loading ?
                    (
                        <Loading />
                    ) : (
                        <div className="MenuBreakfast">
                            {menu &&
                                menu.map(function (item) {
                                    return (
                                        <div
                                            className="printScreen nameProduct"
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                        >
                                            <p>{item.name}</p>
                                            <p>R$ {item.price},00 {' '}
                                                <Button type="submit" onClick={adicionar}>+</Button></p>
                                        </div>
                                    );
                                })}
                            <Command pedido={pedido} />
                        </div>
                    )}
            </div>
        </>
    );
}

export default Breakfast;









