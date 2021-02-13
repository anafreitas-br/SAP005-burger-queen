import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import LogoVector from '../../img/LogoVector.png'
import './Login.css'

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const routerWorkerHall = () => {
        history.push('/hall')
    }

    const routerWorkerKitchen = () => {
        history.push('/kitchen')
    }

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
                console.log(json);

                
                if(json.role === "hall") {
                routerWorkerHall();

                }
                if(json.role === "kitchen") {
                routerWorkerKitchen();
                }

                setEmail('');
                setPassword('');

            })
    }

    const routerRegister = () => {
        history.push('/register')
    }

    return (
        <>
            <img className="Logo" src={LogoVector} />
            
            <h1 className="Title">Faça seu login</h1>
            <p className="Texts">Preencha os campos abaixo</p>
                <form className="Login">
                    <div className="Group">
                       <p> E-mail <span className='required'> *</span> </p>
                        <input type="email" name="email" className="Field" placeholder="ex: myname@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="Group">
                       <p> Senha  <span className='required'> *</span> </p>
                        <input type="password" name="password" className="Field" placeholder="..." value={password} onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <button className="Button" type="submit" onClick={handleSubmit}>Entrar</button>
                    <p className="Texts"> Primeiro dia aqui? <Link to="/register" className="Button-back" >Cadastre-se !</Link></p>
                </form>
        </>
    )
}

export default Login