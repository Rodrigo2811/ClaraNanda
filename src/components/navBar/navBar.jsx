import { Link, useNavigate } from 'react-router-dom'

import logo from '/logo.png'

import style from './navBar.module.css'

const NavBar = () => {

    const navigate = useNavigate()

    function handleLogin() {
        navigate('/Login')
    }
    return (
        <nav className={style.navBar}>
            <div className={style.navLeft}>
                <img className={style.logo} src={logo} alt="logo" />
                <Link to={'/'}>Home</Link>
                <Link to={'/Contato'}>Contato</Link>

            </div>

            <div className={style.navRight}>
                <Link to={'/Cursos'}>Cursos</Link>
                <Link to={'/QuemSomos'}>Quem Somos</Link>
                <button className={style.btnAreaAluno} onClick={handleLogin}>Aréa do Aluno</button>
            </div>
        </nav>

    )
}

export default NavBar