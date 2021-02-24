import React, { useEffect, useState } from 'react'
import InnerHeader from '../../components/InnerHeader';

const Breakfast = () => {

    const token = localStorage.getItem("token")
    const professional = localStorage.getItem("name");
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
          console.log (json)
          const breakfast = json.filter(item => item.type === 'breakfast')
          setMenu(breakfast)
        })
      })


  return (
        <>

        <div className="Breakfast">
        <InnerHeader professional={professional}/>
        <br></br>
        <br></br>
        <div className="MenuBreakfast">
        {menu && menu.map((item) => (
          <div className="printScreen" name={item.name} id={item.id} price={item.price}>
            <p className="nameProduct">{item.name} {item.flavor} {item.complement} R$ {item.price},00</p>
          <button className="btnAdd" >+</button> 
          </div>
        ))}

      
        <br></br>
        <br></br>
        <br></br>
          
          <button className="btnFinal" >Finalizar</button>          
       


      </div>
    </div>
    </>
  );
}

export default Breakfast;
