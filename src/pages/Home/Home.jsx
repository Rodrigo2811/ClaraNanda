import Container from "../../components/secao/secao";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

import banner from '../../image/banner.png'

import style from './home.module.css'

const Home = () => {
    return (
        <>
            <NavBar />
            <Container>

                <div className={style.containerBanner}>
                    <img src={banner} alt="banner" />
                </div>

            </Container>

            <Footer />
        </>
    )
}

export default Home