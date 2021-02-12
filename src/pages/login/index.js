import React, { useState } from 'react' 
import { useHistory, Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
// import * as yup from 'yup'
import LogoVector from '../../img/LogoVector.png'

import './Login.css'


const Login = () => { 
    const history = useHistory();

    const routerWorkerHall= () => {
        history.push('/hall')
    }

    const routerWorkerKitchen = () => {
        history.push('/kitchen')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


        const handleSubmit = (event) => {
            event.preventDefault();
            fetch('https://lab-api-bq.herokuapp.com/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    "email": `${email}`,
                    "password": `${password}`,
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

            setEmail('');
            setPassword('');

        })
    }
        
    const routerRegister = () => { 
        history.push('/register') 
    }

    // const validations = yup.object().shape({
    //     email: yup.string().email().required(),
    //     password: yup.string().min(6).required()
    // })

    return (
        <>
            <img className="Logo" src = { LogoVector }/>
            <h1>Faça seu login</h1>
            <p>preencha os campos abaixo</p>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form className="Login">
                    <div className="Login-Group">
                        <Field name="email" className="Login-Field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                        <ErrorMessage component="span"name="email"className="Login-Error" />
                    </div>
                    <div className="Login-Group">
                        <Field name="password"className="Login-Field" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ErrorMessage component="span"name="password"className="Login-Error"/>
                    </div>
                    <button className="Login-Btn" type="submit" onClick={handleSubmit}>Entrar</button>
                    <p className="question-register"> Primeiro dia aqui? <Link to ="/register" className="button-back-register" onClick={routerRegister}>Cadastre-se !</Link></p>                     
                </Form>
            </Formik>
        </>
    )
}

export default Login