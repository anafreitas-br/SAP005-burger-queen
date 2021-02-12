import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import LogoVector from '../../img/LogoVector.png'
import './Login.css'

const Login = () => {

    const history = useHistory();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = values => {
        console.log(values)
    }

    const routerRegister = () => {
        history.push('/register')
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    return (
        <>
            <img className="Logo" src={LogoVector} />
            <h1 className="Title">Faça seu login</h1>
            <p className="Texts">Preencha os campos abaixo</p>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form className="Login">
                    <div className="Login-Group">
                        <Field type="email" name="email" className="Field" placeholder="Email" />
                        <ErrorMessage component="span" name="email" className="Error" />
                    </div>
                    <div className="Login-Group">
                        <Field type="password" name="password" className="Field" placeholder="Senha" />
                        <ErrorMessage component="span" name="password" className="Error" />
                    </div>
                    <button className="Button" type="submit">Entrar</button>
                    <p className="Texts"> Primeiro dia aqui? <Link to="/register" className="Button-back" >Cadastre-se !</Link></p>
                </Form>
            </Formik>
        </>
    )
}

export default Login