import React, { useEffect, useState } from 'react';
import InnerHeader from '../../components/InnerHeader'


const Burger = () => {

    const token = localStorage.getItem('token')
    const [menuBurger, setMenuBurger] = useState('');
    const professional = localStorage.getItem("name");
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");

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
          const burger = json.filter(item => item.type === 'all-day')
      
          setMenuBurger(burger)
        })
      })

      return (

        <>
        <InnerHeader professional={professional} client={client} table={table}/>
        <div className="Burger">
          <div className="MenuBurger">

            {menuBurger && menuBurger.map(function (item) {
                    return (
                        <div className="printScreen"  name={item.name} id={item.id} price={item.price}>
                            <p className="nameProduct">{item.name} {item.flavor} {item.complement} R$ {item.price},00
                            <button className="btnAdd"> + </button></p>                      
                        </div>
                    );
                })}
                
              <button className="btnFinal">Finalizar</button>
          </div>
        </div>

    </>
  )
}

export default Burger;