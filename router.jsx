import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './src/pages/Home/Home'
import Contact from './src/pages/Contact/Contact';
import About from './src/pages/QuemSomos/About';
import NotFound from './src/pages/NotFound/NotFound';
import Cursos from './src/pages/Cursos/Cursos';
import Login from './src/pages/Login/login';
import Acount from './src/pages/Acount/Acount';



const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/Contato' element={<Contact />} />
                <Route path='/QuemSomos' element={<About />} />
                <Route path='/Cursos' element={<Cursos />} />

                <Route path='/Login' element={<Login />} />
                <Route path='/Acount' element={<Acount />} />



                <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )

}

export default Rotas;