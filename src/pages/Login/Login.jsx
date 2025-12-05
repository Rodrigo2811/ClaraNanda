import { Link } from 'react-router-dom';
import style from './login.module.css'

const Login = () => {
    return (
        <div className={style.containerPrincial}>

            <div className={style.containerLogin}>
                <form className={style.formLogin} >
                    <h2>Login</h2>
                    <input type="text" placeholder='Usuario' />
                    <input type="text" placeholder='Senha' />
                    <button>Entrar</button>

                    <span >Não possui login? <Link to={'/Acount'}>Criar Conta</Link></span>
                </form>

            </div>
        </div>
    )
}

export default Login;