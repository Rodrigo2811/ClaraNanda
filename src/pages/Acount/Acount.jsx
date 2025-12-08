import { Link } from 'react-router-dom';


import logo from '/logo.png'

import style from './acount.module.css'

const Acount = () => {
    return (
        <>
            <div className={style.containerPrincial}>
                <div className={style.containerLogin}>


                    <form className={style.formLogin} >
                        <h2>Criar Conta</h2>
                        <input type="text" placeholder='Usuario' />
                        <input type="email" placeholder='e-mail' />
                        <input type="text" placeholder='Senha' />
                        <input type="text" placeholder='Confirmar Senha' />

                        <button>Criar Conta</button>

                        <span >Já possui login? <Link to={'/Login'}>Fazer Login</Link></span>
                    </form>
                    <img src={logo} alt="logo clara nanda" />
                </div>
            </div>

        </>
    )
}

export default Acount;