import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom' 

const Register = () => { 
const history = useHistory();

    const [name, setName] = useState('');
    const [option, setOption] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const routerLogin = () => {
        history.push('/')
    }

    const btnRegister = (event) => {
        event.preventDefault();
        console.log("fez cadastro")
    }

    return (
        <div className="container-register">
            <h1 className="title-register">Cadastro</h1>
            <form className="form-register">
                <input id="name-register" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="radio" id="option-hall" name="option-register" value={option} onChange={(e) => setOption(e.target.value)} />
                <label id="hall">Sou garçonete ou garçom</label><br />
                <input type="radio" id="option-kitchen" name="option-register" value={option} onChange={(e) => setOption(e.target.value)} />
                <label id="kitchen">Sou cozinheira ou cozinheiro</label><br />
                <input type="email" id="email-register" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" id="pass-register" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button className="button-register" onClick={btnRegister}>Cadastrar</button><br />
                <p className="question-login"> Já tem uma conta? <span className="button-back-login" onClick={routerLogin}>Faça Login aqui!</span></p>
            </form>
        </div>
    );
};

export default Register;