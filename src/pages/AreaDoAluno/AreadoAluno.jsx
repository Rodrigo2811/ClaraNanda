
import logo from '/logo.png'

import style from './areadoaluno.module.css'

const AreaDoAluno = () => {

    const logout = () => {
        const confirmLogout = window.confirm('Deseja realmente sair?');
        if (!confirmLogout) {
            return;
        }
        window.location.href = '/'
    }

    return (
        <>
            <nav className={style.navAreaAluno}>
                <img src={logo} alt="logo clara nanda" />
                <span>Aluno</span>
                <button onClick={logout} className={style.btnLogout}>Sair</button>
            </nav>
        </>
    )
}

export default AreaDoAluno;