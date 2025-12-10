import { Link } from 'react-router-dom';

import logo from '/logo.png'

import style from './login.module.css'
import { useState } from 'react';
import AreaDoAluno from '../AreaDoAluno/AreadoAluno';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const logar = (e) => {
        e.preventDefault();

        if (user === 'admin' && password === 'admin') {
            alert('Login realizado com sucesso!');
            window.location.href = '/AreaDoAluno';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    }
    return (
        <div className={style.containerPrincial}>

            <div className={style.containerLogin}>
                <img src={logo} alt="logo clara nanda" />
                <form className={style.formLogin} onSubmit={logar}>
                    <h2>Login</h2>
                    <input type="text" placeholder='Usuario' onChange={(e) => setUser(e.target.value)} />
                    <input type="text" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                    <button>Entrar</button>

                    <span >Não possui login? <Link to={'/Acount'}>Criar Conta</Link></span>
                </form>

            </div>
        </div>
    )
}


export default Login;