import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import LogoVector from '../../img/LogoVector.png'



const Hall = () =>  {
    const history = useHistory();
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');

        const routerLogout = () => {
            console.log ("oi")
         localStorage.removeItem("token")
         history.push = ("/")
        
        }
    
    //  const routerWorkerHall = () => {
    //      history.push('/hall')
    //  }

    //  const routerWorkerKitchen = () => {
    //     history.push('/kitchen')
    //  }

    const handleSubmitOrders = (event) => {
        event.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "client": `${client}`,
                "table": `${table}`,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);

                
                // if(json.role === "hall") {
                // routerWorkerHall();

                // }
                // if(json.role === "kitchen") {
                // routerWorkerKitchen();
                // }


            })
    }

return (
    <>
        <img className="Logo" alt ="logotipo Vegan Queen" src={LogoVector}/>
        
            <form className="Order">
                <div className="Group">
                <button className="Button" type="submit" onClick={routerLogout}>Sair</button>
                   <p> Cliente <span className='required'> *</span> </p>
                    <input type="client" name="client" className="FieldOrder" placeholder="nome" value={client} onChange={(e) => setClient(e.target.value)}/>
                    <button className="Button" type="submit" onClick={handleSubmitOrders}>Ok</button>
                </div>
                <div className="Group">
                   <p> Mesa  <span className='required'> *</span> </p>
                    <input type="table" name="table" className="FieldOrder" placeholder="n°..." value={table} onChange={(e) => setTable(e.target.value)} />
                    <button className="Button" type="submit" onClick={handleSubmitOrders}>Ok</button>
                </div>
                <p className="Texts"> <Link to='/register' className="Button-back" >Café da manhã</Link></p>
                <p className="Texts"> <Link to='/register'className="Button-back" >Lanches</Link></p>
                <p className="Texts"> <Link to='/register'className="Button-back" >Acompanhamentos</Link></p>
                <p className="Texts"> <Link to='/register'className="Button-back" >Bebidas</Link></p>
                <p className="Texts"> <Link to='/register' className="Button-back" >Sobremesas</Link></p>
            </form>
    </>
)

}

export default Hall;

