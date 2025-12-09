import NavBar from "../../components/navBar/navBar";
import Container from "../../components/secao/secao";
import Footer from "../../components/footer/footer";

import style from './contato.module.css'
const Contact = () => {
    return (
        <>
            <NavBar />
            <Container>
                <section className={style.secaoFormaContato}>

                    <h2>Entre em Contato Conosco</h2>

                    <h3>Escolha a opção que melhor se adapta à sua necessidade:</h3>

                    <p>Formulário de Contato: A maneira mais rápida e eficiente de nos enviar sua mensagem.<br />
                        Preencha os campos e entraremos em contato o mais breve possível.</p>

                    <p>E-mail: Prefere o contato direto? Envie sua mensagem para:</p>

                    clarananda@gmail.com

                    <p>Telefone/WhatsApp: Se precisar de uma resposta imediata ou prefere conversar:</p>

                    (XX) XXXX-XXXX  (XX) XXXXX-XXXX (WhatsApp)

                </section>


                <section className={style.containerForm}>
                    <form className={style.formContato}>

                        <h2>Formulário de Contato</h2>
                        <input type="text" placeholder="Digite seu Nome" />
                        <input type="email" placeholder="Digite seu e-mail" />
                        <input type="text" placeholder="Digite o Assunto" />
                        <textarea name="" id="" placeholder="Escreva sua mensagem"></textarea>
                        <button>Enviar</button>
                    </form>
                </section>



                <section className={style.containerRight}>
                    <h3>Horário de Atendimento</h3>
                    <p>Nossa equipe está disponível para atender você nos seguintes horários:</p>

                    <span>Segunda a Sexta: 9h00 às 18h00 (Horário de Brasília)</span>
                    <span>Sábados, Domingos e Feriados: Atendimento Indisponível</span>

                </section>

            </Container>

            <Footer />
        </>
    )
}

export default Contact;