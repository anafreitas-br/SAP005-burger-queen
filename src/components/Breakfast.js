 import React, { useEffect, useState } from 'react'
 import InnerHeader from './InnerHeader';
 import Command from './Command';

 const Breakfast = () => {

  const token = localStorage.getItem("token")
  const [menu, setMenu] = useState('');    
  const professional = localStorage.getItem("name");

 
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
        console.log (json)
        const breakfast = json.filter(item => item.type === 'breakfast')
        setMenu(breakfast)
      })
    },[token])

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
      let pedido = [];
      if (localStorage.hasOwnProperty("pedido")) {
          pedido = JSON.parse(localStorage.getItem("pedido"))
          console.log(pedido)
          pedido.push({objeto})
           console.log(objeto)
      }

      localStorage.setItem("pedido", JSON.stringify(pedido))
  };

return (
      <>
      <div className="Breakfast">
      <InnerHeader professional={professional}/>
      <br></br>
      <br></br>
      <div className="MenuBreakfast">
      {menu && menu.map((item) => (
        <div className="printScreen" name={item.name} id={item.id} price={item.price}>
          <p className="nameProduct">{item.name}   R$ {item.price},00</p>
          <button className="btnAdd"  onClick={adicionar}>  + </button>
        </div>
      ))}
      <br></br>
      <br></br>
      <br></br>

        <Command/>
    </div>
  </div>
  </>
);
}

export default Breakfast;









