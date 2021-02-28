import React, { useState } from 'react';

const Order = () => {
	const pedido = JSON.parse(localStorage.getItem('pedido'));
	// const [list, setList]=React.useState([])
	//  const [totalValor, setTotalValor] = useState(0);
	const [ sum, setSum ] = useState(0);

	const sumOrder = () => {
		pedido.forEach((item) => {
			let add = Number(item.objeto.price);
			console.log(add);
			setSum(add + sum);
			add.innerText = `
            <p> ${sum} oi </p>
            `;
		});
	};

	// const del=(event)=>{
	// event.preventDefault();
	// const parent = event.target.parentNode.parentNode;
	// const complement = parent.getAttribute('complement');
	// const flavor = parent.getAttribute('flavor');
	// const id = parent.getAttribute('id');
	// const name = parent.getAttribute('name');
	// const price = parent.getAttribute('price');
	// const objeto ={
	//     id: id,
	//     name: name,
	//     flavor: flavor,
	//     complement: complement,
	//     price: price
	// }

	// const deletItem = (index)=> {
	//     const newList = pedido;
	//     newList.splice(index,1);
	//     setList(pedido)

	// }
	// }
	// const deletItem = (index, e)=> {
	//     const pedido = Object.assign([], "objeto")
	//     pedido.splice([index],1);

	// }

	// const deletItem = (item, pedido) => {
	//     pedido.splice(pedido.indexOf(item), 1)
	//     const value = item.price
	//     setValueDelect(totalValor - value)
	//     setTotalValor(totalValor - Number(item.price))
	//     console.log(item)
	//     console.log(pedido)
	//     console.log(valueDelect)
	//   }

	return (
		<div className="CommandDetails">
			{pedido &&
				pedido.map((item) => {
					return (
						<div
							className="commandScreen"
							key={Math.random()}
							name={item.name}
							flavor={item.flavor}
							complement={item.complement}
							id={item.id}
							price={item.price}
						>
							<p className="eachDetail">{item.name}</p>
							<p className="eachDetail">{item.flavor} </p>
							<p className="eachDetail">{item.complement}</p>
							<p className="eachDetail">R$ {item.price},00</p>
							{/* <button className="btnDel" onClick={()=>deletItem({objeto})} > - </button>  */}
						</div>
					);
				})}

			<div className="divPedidosBlock">
				<div className="divPedidos">
					<h1 className="divPedidosTitle">Comanda</h1>

					{pedido &&
						pedido.map((item) => (
							<div className="divPedidosIndividuais" key={Math.random()}>
								{/* <button className='btnDelet' onClick={() => deletItem(item, pedido)}>X</button>                     <p key={Math.random()}>{item.nome}</p> */}
								<p key={Math.random()}>{item.flavor}</p>
								<p key={Math.random()}>{item.complement}</p>
								<p key={Math.random()}>R${item.price},00</p>
							</div>
						))}
					{/* <h3>{setTotalValor}</h3>  */}
				</div>
				<p id="soma" />
				<button onClick={sumOrder}>Somar</button>
				<button className="btnFinal">Finalizar</button>
			</div>
		</div>
	);
};

export default Order;
