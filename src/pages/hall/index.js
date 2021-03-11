import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../../components/InnerHeader'
import lanches from '../../img/lanches.png'
import prontos from '../../img/prontos.png'
import café from '../../img/café.png'


const Hall = () => {

  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    localStorage.setItem("client", client)
    localStorage.setItem("table", table)
  }, [client, table])

  return (
    <>
      <InnerHeader />
      <form className="Order">
        <div className="Inputs">
          <p className="Texts"> Cliente <span className='required'> *</span>
            <input name="client" className="FieldOrder FieldClient" placeholder="nome" value={client} onChange={(e) => setClient(e.target.value)} /></p>
          <p className="Texts"> Mesa <span className='required'> * </span>
            <input type="number" name="table" className="FieldOrder FieldClient" placeholder="n°..." value={table} onChange={(e) => setTable(e.target.value)} /></p>
        </div>
        <div className="Inputs">
          <p className="Texts client">Cliente: {client}</p>
          <p className="Texts client">Mesa: {table}</p>
        </div>
      </form>
      <div className="orderDay">
        <Link to='/burger'>
          <img className="Button VQ" alt="botão para menu lanches" src={lanches} type="submit"/>
          <figcaption className="legend"><strong>Lanches</strong></figcaption>
        </Link>
        <Link to='/breakfast'>
          <img className="Button" alt="botão para menu Café" src={café} type="submit"/>
          <figcaption><strong>Café-da-Manhã</strong></figcaption>
        </Link>
        <Link to='/orderkitchen'>
          <img className="Button" alt="botão para os pedidos prontos" src={prontos} type="submit" />
          <figcaption><strong>Está Pronto!</strong></figcaption>
        </Link>
      </div>

    </>
  )
}

export default Hall;