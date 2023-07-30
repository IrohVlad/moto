import React from 'react';
import AppRouter from './AppRouter';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes, useLocation} from 'react-router-dom'
import MainPage from '../pages/mainPage/MainPage';
import MapPage from '../pages/mapPage/MapPage';
import MotoPage from '../pages/motoPage/MotoPage';
import ResultsPage from '../pages/resultsPage/ResultsPage';

const Router = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            {/* {AppRouter.map((elem, index)=>{
                return <Route path={elem.path} element={elem.element} key={index}/>
            })} */}
            <Route index element={<MainPage/>}/>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/moto' element={<MotoPage/>}/>
            <Route path='/results' element={<ResultsPage/>}/>
        </Routes>
        </AnimatePresence>
    );
};

export default Router;