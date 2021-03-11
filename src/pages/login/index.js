import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import OutHeader from '../../components/OutHeader';
import { Button } from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal.js'
import Footer from '../../components/Footer'

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [warning, setWarning] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": `${email}`,
        "password": `${password}`,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token)
        localStorage.setItem("name", json.name)
        if (json.message !== undefined) {
          setWarning(json.message)
          setIsModalVisible(true)
        }
        if (json.role === "hall") {
          history.push('/hall')
        }
        if (json.role === "kitchen") {
          localStorage.setItem("id", json.id)
          history.push('/kitchen')
        }
      })
  }

  return (
    <>
      <OutHeader message={"Faça seu login"} />
      <form className="Login">
        <div className="Group">
          <p> E-mail <span className='required'> *</span> </p>
          <input type="email" name="email" className="Field" placeholder="ex: myname@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div method="Post" className="Group">
          <p> Senha  <span className='required'> *</span> </p>
          <input type="password" name="password" className="Field" placeholder="..." value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" onClick={handleSubmit}>Entrar</Button>
        <p className="TextsRegister Ask"> Primeiro dia aqui? <Link to="/register" className="Button-back" >Cadastre-se !</Link></p>
      </form>
      <div className="modalC">
        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h1>{warning}</h1>
          </Modal>
        ) : null}
      </div>
      <br></br>
      <br></br>
      <Footer/>
    </>
  )
}

export default Login