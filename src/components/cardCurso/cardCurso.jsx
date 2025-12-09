


import style from './cardCurso.module.css'

const CardCurso = ({ foto, title, description }) => {
    return (

        <>
            <div className={style.containerCard}>
                <div>
                    <img src={foto} alt="img" />
                </div>
                <div>
                    <h4 className={style.title}>{title}</h4>
                </div>
                <div>
                    <p className={style.description}>{description}</p>
                </div>
            </div>

        </>
    )
}

export default CardCurso;