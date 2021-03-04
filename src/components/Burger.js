import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import InnerHeader from '../components/InnerHeader';
import Command from './Command';
import Loading from '../components/Loading';


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
                const burger = json.filter(item => item.type === 'all-day')
                burger.forEach(item => {
                    if (item.flavor === "carne" & item.complement === "queijo") {
                        item.flavor = "beterraba e grão de bico"
                        item.complement = "Com queijo de castanhas"
                    } else if (item.flavor === "carne" & item.complement === "ovo") {
                        item.flavor = "beterraba e grão de bico"
                        item.complement = "Com ovo vegetal"
                    } else if (item.flavor === "carne") {
                        item.flavor = "beterraba e grão de bico"
                    } else if (item.flavor === "frango" & item.complement === "queijo") {
                        item.flavor = "shimeji e paris"
                        item.complement = "Com queijo de castanhas"
                    } else if (item.flavor === "frango" & item.complement === "ovo") {
                        item.flavor = "shimeji e paris"
                        item.complement = "Com ovo vegetal"
                    } else if (item.flavor === "frango") {
                        item.flavor = "shimeji e paris"
                    } else if (item.flavor === "vegetariano" & item.complement === "queijo") {
                        item.flavor = "falafel"
                        item.complement = "Com queijo de castanhas"
                    } else if (item.flavor === "vegetariano" & item.complement === "ovo") {
                        item.flavor = "falafel"
                        item.complement = "Com ovo vegetal"
                    } else if (item.flavor === "vegetariano") {
                        item.flavor = "falafel"
                    }
                })
                setMenuBurger(burger)
                setLoading(false)
            })
    }, [token]);

    const adicionar = (event) => {
        event.preventDefault();
        const parent = event.target.parentNode.parentNode;
        const complement = parent.getAttribute("complement");
        const flavor = parent.getAttribute('flavor');
        const id = parent.getAttribute('id');
        const name = parent.getAttribute('name');
        const price = parent.getAttribute('price');

        const objeto = {
            id: id,
            name: name,
            flavor: flavor,
            complement: complement,
            price: price,
            qtd: 1
        }
        setPedido(obj => [...obj, objeto])
    };


    return (
        <>
            <InnerHeader />
            <Link to="./hall">
                <Button type="submit">Home</Button>
            </Link>
            <div className="Burger">
                {loading ?
                    (
                        <Loading />
                    ) : (
                        <div className="MenuBurger">
                            {menuBurger &&
                                menuBurger.map(function (item) {
                                    return (
                                        <div
                                            className="printScreen nameProduct"
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            flavor={item.flavor}
                                            complement={item.complement}
                                            price={item.price}
                                        >
                                            <p>{item.name}</p>
                                            <p>Sabor {item.flavor}</p>
                                            <p>{item.complement}</p>
                                            <p>R$ {item.price},00 {' '}
                                                <Button className="btnAdd" onClick={adicionar}>+</Button></p>
                                        </div>
                                    );
                                })}
                            <Command pedido={pedido} />
                        </div>
                    )}
            </div>
        </>
    );

export default Burger;
