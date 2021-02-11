import React, { useState } from 'react'
import { history } from '../../history'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const routerRegister = () => {
        history.push('/register')
    }

    const btnLogin = (event) => {
        event.preventDefault();
        console.log("fez login")
    }

    return (
        <div className="container-login">
            <h1 className="title-login">Login</h1>
            <form className="form-login">
                <input type="email" id="email-login" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" id="pass-login" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button className="button-login" onClick={btnLogin}>Login</button><br />
                <p className="question-register">Primeiro dia aqui? <span className="button-back-register" onClick={routerRegister}>Crie sua conta aqui!</span></p>
            </form>
        </div>
    );
};


// <div class='container'> 
//     <form action="Acesso">
//     <div class="form">
//     <input type="email" class='acessar' id='email' placeholder='Digite o seu email' autocomplete='off'>
// </div>
// <div class='form'>
//     <input type='password' class='acessar' id='senha' placeholder='Senha' autocomplete='off'>
// </div>
// </form>
//     <button class='btn'id='btnLogin'>
//     Iniciar sessão 
//     </button> 
//     <ul>     
//     <li id="btnRegister">Não possui conta?
//         <a href="/register">Cadastre-se</a>
//     </li>
//     </ul> 
// </div>
// `;

export default Login;