import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Contato from '../Pages/Contato';

const Rotas = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>} ></Route>
                    <Route path='/contato' element={<Contato/>}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Rotas;