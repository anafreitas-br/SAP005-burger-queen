import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button/Button';
import InnerHeader from './InnerHeader';
import Command from './Command';


const Breakfast = () => {

    const token = localStorage.getItem("token")
    const [menu, setMenu] = useState('');
    const professional = localStorage.getItem("name");
    const [pedido, setPedido] = useState(JSON.parse(localStorage.getItem("pedido")));

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
                setMenu(breakfast)
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
            price: price
        }

        if (localStorage.hasOwnProperty("pedido")) {
            let novoPedido = JSON.parse(localStorage.getItem("pedido"))
            novoPedido.push({ ...objeto })
            localStorage.setItem("pedido", JSON.stringify(novoPedido))
            setPedido(novoPedido)
            console.log(novoPedido)
        } else {
            localStorage.setItem("pedido", JSON.stringify([{...objeto}]))
            setPedido([{...objeto}])
        }
    };

    return (
        <>
            <div className="Breakfast">
                <InnerHeader professional={professional} />
                <Link to = './hall'>
                <Button type="submit">Home</Button>
                </Link>
                <br></br>
                <br></br>
                <div className="MenuBreakfast">
                    {menu && menu.map( function (item) {
                        return (

                            <div className="printScreen" key={item.id} name={item.name} id={item.id} price={item.price}>
                            <p className="nameProduct">{item.name}   R$ {item.price},00
                            <button className="btnAdd" onClick={adicionar}>  + </button> </p>
                        </div>

                        );
                    })}
                    <br></br>
                    <br></br>
                    <br></br>

                    <Command pedido={pedido} />
                </div>
            </div>
        </>
    );
}

export default Breakfast;









