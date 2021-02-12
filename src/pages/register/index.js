import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
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
            body: JSON.stringify({
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
                alert('conta criada')
                routerLogin();
            })
    }

    return (
        <>
            <img className="Logo" src={LogoVector} />
            <h1 className="Title">Crie sua conta</h1>
            <p className="Texts">Preencha os campos abaixo</p>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form className="Register">
                    <div className="Register-Group">
                        <Field name="name" className="Field" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <ErrorMessage component="span" name="name" className="Error" />
                    </div>
                    <div className="Register-Group">
                        <Field type="email" name="email" className="Field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <ErrorMessage component="span" name="email" className="Error" />
                    </div>
                    <div className="Register-Group">
                        <Field type="password" name="password" className="Field" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ErrorMessage component="span" name="password" className="Error" />
                    </div>
                    <div className="Register-Group" id="Option-Group">
                        <p className="Texts"><Field type="radio" name="option" className="Option" value={option, "hall"} onClick={(e) => setOption(e.target.value)} /> Sou garçonete ou garçom</p>
                        <p className="Texts"><Field type="radio" name="option" className="Option" value={option, "kitchen"} onClick={(e) => setOption(e.target.value)} /> Sou cozinheira ou cozinheiro</p>
                        <ErrorMessage component="span" name="email" className="Error" />
                    </div>
                    <button className="Button Btn-Register" type="submit" onClick={handleSubmit}>Cadastrar</button>
                    <p className="Texts"> Já tem uma conta? <Link to="/" className="Button-back" >Faça Login aqui!</Link></p>
                </Form>
            </Formik>
        </>
    );
}


export default Register;
