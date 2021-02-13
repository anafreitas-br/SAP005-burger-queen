import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
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
            <img className="Logo" src={LogoVector} />
            <h1 className="Title">Faça seu login</h1>
            <p className="Texts">Preencha os campos abaixo</p>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form className="Login">
                    <div className="Group">
                        E-mail
                        <Field type="email" name="email" className="Field" placeholder="ex: myname@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <ErrorMessage component="span" name="email" className="Error" />
                    </div>
                    <div className="Group">
                        Senha
                        <Field type="password" name="password" className="Field" placeholder="..." value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ErrorMessage component="span" name="password" className="Error" />
                    </div>
                    <button className="Button" type="submit" onClick={handleSubmit}>Entrar</button>
                    <p className="Texts"> Primeiro dia aqui? <Link to="/register" className="Button-back" >Cadastre-se !</Link></p>
                </Form>
            </Formik>
        </>
    )
}

export default Login