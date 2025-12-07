import Container from "../../components/secao/secao";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

import style from './quemsomos.module.css'

const About = () => {
    return (
        <>
            <NavBar />
            <Container>
                <section className={style.container}>
                    <h1 className={style.title}>Quem Somos</h1>

                    <p>
                        Bem-vindo(a) à Clara nanda! É um prazer compartilhar com você quem somos, o que fazemos e, acima de tudo, por que fazemos.
                    </p>

                    <section className={style.container}>
                        <h3>Nossa História e Missão</h3>

                        <p>
                            A Clara nanda nasceu em 2021 com um objetivo claro de transformar o mercado de consultoria em tecnologia, tornando soluções complexas acessíveis a todos.
                        </p>

                        <p>
                            Nossa Missão é: Entregar produtos/serviços de alta qualidade que superem as expectativas dos nossos clientes e contribuam para o seu sucesso e crescimento.
                        </p>

                    </section>

                    <section className={style.container}>

                        <h3> O Que Nos Move: Nossos Valores</h3>

                        <p>
                            Guiamos todas as nossas ações e decisões por um conjunto de valores essenciais que definem nossa cultura e a maneira como interagimos com clientes, parceiros e uns com os outros:
                        </p>

                        <ul>
                            <li>Inovação: Buscar constantemente novas soluções e aperfeiçoar o que já fazemos.</li>
                            <li>Integridade: Agir com transparência, ética e honestidade em todas as relações.</li>
                            <li>Foco no Cliente: Colocar as necessidades e a satisfação do cliente no centro do nosso trabalho.</li>
                            <li>Excelência: Comprometimento com a mais alta qualidade em nossos produtos e serviços.</li>
                            <li>Sustentabilidade: Promover práticas que garantam um impacto positivo a longo prazo.</li>
                        </ul>

                    </section>

                    <section className={style.container}>
                        <h3>Nossa Visão de Futuro</h3>

                        <p>
                            Almejamos ser a principal referência no setor de educação, reconhecida pela inovação e pelo impacto positivo que geramos em nossos clientes.
                        </p>
                        <p>
                            Acreditamos que, com paixão, dedicação e o talento da nossa equipe, podemos alcançar essa visão e continuar a evoluir ao lado de nossos clientes.
                        </p>
                    </section>

                </section>


            </Container>

            <Footer />
        </>
    )
}

export default About;