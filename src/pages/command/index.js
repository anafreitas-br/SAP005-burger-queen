import React from 'react'
import InnerHeader from '../../components/InnerHeader';

const Command = () => {

    const order = JSON.parse(localStorage.getItem("order"));
    const professional = localStorage.getItem("name");
    console.log(order)


    return (
        <>
            <div className="Command">
                <InnerHeader professional={professional} />
                <div className="CommandDetails">
                    {order.map(function (item) {
                        console.log(item.objeto)
                        return (
                            <div className="commandScreen" >
                                <p className="eachProduct"> {item.objeto.name} {item.objeto.flavor} {item.objeto.complement} R${item.objeto.price}</p>
                            </div>
                        )
                    })}
                    <button className="btnFinal" > Finalizar </button>
                </div>
            </div>
        </>
    )
}

export default Command