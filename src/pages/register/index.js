import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import OutHeader from '../../components/OutHeader'

const Register = () => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [option, setOption] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                if (json.message !== undefined) {
                    alert(json.message)
                } else {
                    alert("Conta criada com sucesso !")
                    history.push('/')
                }

            })
    }

    return (
        <>
            <OutHeader message={"Crie sua conta"} />
            <form className="Register">
                <div className="Group">
                    <p>Nome Completo<span className='required'> *</span></p>
                    <input name="name" className="Field" placeholder="ex: Fulano de Tal" value={name} onChange={(e) => setName(e.target.value)} />
                    <div className="Group">
                        <p>Email<span className='required'> *</span></p>
                        <input type="email" name="email" className="Field" placeholder="ex: myname@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="Group">
                        <p>Senha<span className='required'> *</span></p>
                        <input type="password" name="password" className="Field" placeholder="mínimo 6 digitos" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="Group" id="Option-Group">
                        <form className="Texts">
                            <p >Selecione a sua áerea de trabalho<span className='required'>*</span>
                                <input type="radio" name="option" className="Option" id="hall" value={option} onClick={(e) => setOption(e.target.id)} /> Salão
                            <input type="radio" name="option" className="Option" id="kitchen" value={option} onClick={(e) => setOption(e.target.id)} /> Cozinha                                </p>
                        </form>
                    </div>
                    <button className="Button Btn-Register" type="submit" onClick={handleSubmit}>Cadastrar</button>
                    <p className="Texts"> Já tem uma conta? <Link to="/" className="Button-back" >Faça Login aqui!</Link></p>
                </div>
            </form>
        </>
    );
}


export default Register;
