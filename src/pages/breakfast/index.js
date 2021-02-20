import React, { useEffect, useState } from 'react';


const Breakfast = () => {

    const token = localStorage.getItem("token")
    const [menu, setMenu] = useState('');
   
   

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
    <div className="Breakfast">
      <div className="MenuBreakfast">

        {menu && menu.map((item) => (
          <div className="printScreen" key={item.name} name={item.name} id={item.id} price={item.price}>
            <h1 className="nameProduct">{item.name}</h1>
            <h1 className="priceItem">R$ {item.price},00</h1>
            <button className="btnAdd"> Adicionar</button>
          </div>
        ))}
             
          <button className="btnFinal">Finalizar</button>
         
          
       
      </div>
    </div>
  );
}




export default Breakfast;

