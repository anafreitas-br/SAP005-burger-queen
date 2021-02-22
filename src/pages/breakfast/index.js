import React, { useEffect, useState } from 'react';
import InnerHeader from '../../components/InnerHeader';

const Breakfast = () => {

    const [menu, setMenu] = useState('');
    // const [command, setCommand] = useState([]);
    const token = localStorage.getItem("token")
    const professional = localStorage.getItem("name");
    
    // const objetoItem = (event) => {
    //     console.log("clicou")
    //     event.preventDefault();
    //     const parent = event.target.parentNode;
    //     const complement = parent.getAttribute('complement');
    //     const flavor = parent.getAttribute('flavor');
    //     const price = parent.getAttribute('price');
    //     const id = parent.getAttribute('id');
    //     const name = parent.getAttribute('name');
    //     const objeto ={
    //         complement: complement,
    //         flavor: flavor,
    //         id: id,
    //         nome: name,
    //         price: price
    //     }
    //     adicionar(objeto)
    // }

    // const adicionar = (item) => {
    //   const array = command
    //   array.push(item)
    //   setCommand(array)
    // }
   
    useEffect (() => {
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
    })

    return (
        <>
        <div className="Breakfast">
        <InnerHeader professional={professional}/>
        <div className="MenuBreakfast">
        {menu && menu.map((item) => (
          <div className="printScreen" name={item.name} id={item.id} price={item.price}>
            <h1 className="nameProduct">{item.name}</h1>
            <h1 className="priceItem">R$ {item.price},00</h1>
            <button className="btnAdd" onclick={console.log("clicou")}> Adicionar</button>
          </div>
        ))}
            <div className="Container-comanda">
            <div className="pedidos">
            <h1 className="Texts">Comanda:</h1>
            {/* {command && command.map((item) => 
                <p className="CommandProduct">{item.name} {item.flavor} {item.complement} R$ {item.price},00
                <button className="Delete" onclick={console.log("deletou")}>-</button></p>
            )} */}
            </div>
            <button className="btnFinal">Finalizar</button>
        </div>            
      </div>
    </div>
    </>
  );
}

export default Breakfast;