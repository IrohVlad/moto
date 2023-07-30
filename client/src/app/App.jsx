import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Router from './Router';
import './index.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// для модулей навигации и пагинации

function App() {
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path={'/*'} element={<Router/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;