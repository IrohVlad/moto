import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {store} from '../pages/authPage/store/store'
import { Provider } from 'react-redux';
import Router from './Router';
import './index.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// для модулей навигации и пагинации

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/*'} element={<Router/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
};
export default App;