import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import LogoVector from '../img/LogoVector.png'
import logout from '../img/logout.png'
import Modal from './Modal'

const InnerHeader = () => {
  const history = useHistory();
  const professional = localStorage.getItem("name");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const routerLogout = () => {
    const logoutConfirm = window.confirm('Deseja fazer logout ?');
    if (logoutConfirm === true) {
      localStorage.clear();
      history.push('/')
    }
  }

  return (
    <>
      <img className="btnLogout" src={logout} alt='Sair'  onClick={routerLogout} />
      <div className="modalC">
        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h1>{routerLogout}</h1>
          </Modal>
        ) : null}
      </div>
      <div className='divNavbar'>
        <img className="LogoOrder" alt="logotipo Vegan Queen" src={LogoVector} />
        <form className="Order">
          <div className="Professional">
            <p className="TextsProf">Olá, {professional}</p>

          </div>
        </form>
      </div>
      
    </>
  )
}

export default InnerHeader;