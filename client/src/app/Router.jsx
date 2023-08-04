import React from 'react';
import AppRouter from './AppRouter';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes, useLocation, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../pages/mainPage/MainPage';
import MapPage from '../pages/mapPage/MapPage';
import AuthPage from '../pages/authPage/AuthPage';
import MotoPage from '../pages/motoPage/MotoPage';
import ResultsPage from '../pages/resultsPage/ResultsPage';
import AdminPage from '../pages/adminPage/AdminPage';
import { RefreshRequest } from '../pages/authPage/store/authSlice';

const Router = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state)=> state.auth);
    React.useEffect(()=>{
        RefreshRequest(dispatch);
    }, [])
    const location = useLocation();
    return (
        !auth.before ? <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            {/* {AppRouter.map((elem, index)=>{
                return <Route path={elem.path} element={elem.element} key={index}/>
            })} */}
            <Route index element={<MainPage/>}/>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/moto' element={<MotoPage/>}/>
            <Route path='/results' element={<ResultsPage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            {auth.auth && 
            <Route path='/admin' element={<AdminPage/>}/>}
            <Route path='*' element={<Navigate to={'/'}/>} />

        </Routes>
        </AnimatePresence> : <></>
    );
};

export default Router;