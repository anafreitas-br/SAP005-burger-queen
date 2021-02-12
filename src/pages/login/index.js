
import React from 'react'
import { useHistory, Link } from 'react-router-dom'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import LogoVector from '../login/LogoVector.png'

import './Login.css'

    const Login = () => {
        
    const history = useHistory();    
    const handleSubmit = values => console.log(values)
        
    const routerRegister = () => { history.push('/register') } 
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    return (
        <>
            <img className="Logo" src = { LogoVector }/>
            <h1>Faça seu login</h1>
            <p>preencha os campos abaixo</p>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form className="Login">
                    <div className="Login-Group">
                        <Field name="email" className="Login-Field"/>
                        <ErrorMessage component="span"name="email"className="Login-Error"/>
                    </div>
                    <div className="Login-Group">
                        <Field name="password"className="Login-Field"/>
                        <ErrorMessage component="span"name="password"className="Login-Error"/>
                    </div>
                    <button className="Login-Btn" type="submit">Entrar</button>
                    <p className="question-register"> Primeiro dia aqui? <Link to ="/register" className="button-back-register" 
                    onClick={routerRegister}>Cadastre-se !</Link></p>                     
                </Form>
            </Formik>
        </>
    )
}

export default Login