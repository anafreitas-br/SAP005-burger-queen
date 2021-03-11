import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import LogoVector from '../img/LogoVector.png'
import logout from '../img/logout.png'
import Modal from './Modal'
import Button from './Button/Button';

const InnerHeader = () => {
  const history = useHistory();
  const professional = localStorage.getItem("name");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const routerLogout = () => {
    localStorage.clear();
    history.push('/')
  }

  return (
    <>
      <img className="btnLogout" src={logout} alt='Sair' onClick={() => setIsModalVisible(true)} />
      <div className='divNavbar'>
        <img className="LogoOrder" alt="logotipo Vegan Queen" src={LogoVector} />
        <form className="Order">
          <div className="Professional">
            <p className="TextsProf">Olá, {professional}</p>
          </div>
        </form>
      </div>
      <div className="modalC">
        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h1>Tem certeza que deseja fazer logout ?</h1>
            <Button onClick={routerLogout}>Tenho certeza</Button>
          </Modal>
        ) : null}
      </div>
    </>
  )
}

export default InnerHeader;