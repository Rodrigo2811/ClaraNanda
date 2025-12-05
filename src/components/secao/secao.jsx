import style from './secao.module.css'

const Container = ({ children }) => {
    return (
        <section className={style.secao}>
            {children}
        </section>
    )
}

export default Container;