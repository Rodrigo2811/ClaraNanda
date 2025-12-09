import Container from '../../components/secao/secao';
import NavBar from "../../components/navBar/navBar";

import Footer from "../../components/footer/footer";
import CardCurso from '../../components/cardCurso/cardCurso';


import foto from '../../image/foto.jpg'

const Cursos = () => {
    return (
        <>

            <NavBar />

            <Container>

                <CardCurso
                    foto={foto}
                    title={'Curso 1'}
                    description={'Descrição 1'}
                />

                <CardCurso
                    foto={foto}
                    title={'Curso 2'}
                    description={'Descrição 2'}
                />
                <CardCurso
                    foto={foto}
                    title={'Curso 3'}
                    description={'Descrição 3'}
                />


            </Container>

            <Footer />
        </>
    )
}

export default Cursos;