import React, { useState } from 'react' 
import { useHistory, Link } from 'react-router-dom' 
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import LogoVector from '../../img/LogoVector.png'

const Register = () => { 

    const history = useHistory();

    const [name, setName] = useState('');
    const [option, setOption] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const routerLogin = () => {
        history.push('/')
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        name: yup.string().required(),
        option: yup.string().required()
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                "email": `${email}`,
                "password": `${password}`,
                "role": `${option}`,
                "restaurant": "Vegan Queen",
                "name": `${name}`
            })
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            // if(json.id !== null) {
            //     event.preventDefault();
            //     alert("cadastro realizado com sucesso!")
            //     routerLogin();
            // } 
            // if (json.email === `${email}`) {
            //     event.preventDefault();
            //     alert("houve um erro no cadastro")
            // }
            setName('');
            setEmail('');
            setPassword('');
        })
    }

    return (
        <>
            <img className="Logo" src = { LogoVector }/>
            <h1>Crie sua conta</h1>
            <p>preencha os campos abaixo</p>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form className="Register">
                    <div className="Register-Group">
                        <Field name="name" className="Register-Field" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <ErrorMessage component="span"name="name"className="Register-Error" />
                    </div>
                    <div className="Register-Group">
                        <Field type="email" name="email" className="Register-Field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <ErrorMessage component="span"name="email" className="Register-Error" />
                    </div>
                    <div className="Register-Group">
                        <Field type="password" name="password"className="Register-Field" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ErrorMessage component="span"name="password"className="Register-Error" />
                    </div>
                    <div className="Register-Group" id="Option-Group">
                        <Field type="radio" name="option" value={option, "hall"} onClick={(e) => setOption(e.target.value)} />Sou garçonete ou garçom
                        <Field type="radio" name="option" value={option, "kitchen"} onClick={(e) => setOption(e.target.value)} />Sou cozinheira ou cozinheiro
                        <ErrorMessage component="span"name="email" className="Register-Error" />
                    </div>
                    <button className="Register-Btn" type="submit" onClick={handleSubmit}>Cadastrar</button>
                    <p className="question-login"> Já tem uma conta? <span className="button-back-login" onClick={routerLogin}>Faça Login aqui!</span></p>
                </Form>
            </Formik>
        </>
    );
    }    


export default Register;
