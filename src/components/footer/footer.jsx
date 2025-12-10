import { Link } from 'react-router-dom'

import insta from '../../image/instagram.svg'
import whatsapp from '../../image/whatsapp.svg'
import style from './footer.module.css'



const Footer = () => {
    return (
        <footer className={style.rodape}>

            <div className={style.containerRedesSociais}><span>Redes Sociais</span>
                <Link to={''} target='_blank'><img className='icon' src={insta} alt="ClaraNanda" /></Link>
                <Link to={''} target='_blank'><img className='icon' src={whatsapp} alt="ClaraNanda" /></Link>

            </div>
            <div>&copy;Clara Nanda, Todos os Direitos Reservados. 2024 - 2025</div>

            <div className={style.containerMenuRapido}>
                <Link to={'/'}>Home</Link>
                <Link to={'/Contato'}>Contato</Link>
                <Link to={'/QuemSomos'}>Quem Somos</Link>
                <Link to={'/Cursos'}>Cursos</Link>
            </div>
        </footer >
    )
}

export default Footer;