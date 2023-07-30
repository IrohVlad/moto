import MainPage from '../pages/mainPage/MainPage'
import MapPage from '../pages/mapPage/MapPage'
import React from 'react'
export default [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/map',
        element: <MapPage/>
    }
]