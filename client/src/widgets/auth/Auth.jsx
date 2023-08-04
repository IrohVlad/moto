import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {LoginRequest } from '../../pages/authPage/store/authSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [authData, setAuthData] = React.useState({login: '', password: ''})
    const Auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(()=>{
        console.log(authData)
    }, [authData])
    return (
        <section className="auth-section">
            <div className="auth">
                <div className="auth-form">
                    <div className="auth-title">
                        Login
                    </div>
                    <input onChange={(e)=>{
                        setAuthData({...authData, login: e.target.value});
                    }} placeholder="Enter email I'd" type="text" className="auth-input">
                    </input>
                    <input onChange={(e)=>{
                        setAuthData({...authData, password: e.target.value});
                    }} placeholder="Enter Password" type="password" className="auth-input">
                    </input>
                        {Object.keys(Auth.errors).length ? Object.keys(Auth.errors).map(key=>{
                            return <div className="auth-error">{Auth.errors[key]}</div>
                        }) : ''}
                    <div onClick={()=>{
                        LoginRequest(dispatch, {login: authData.login, password: authData.password}, navigate)
                    }} className="auth-button">
                        Login
                    </div>
                    <div onClick={()=>{
                        setState({name: 'login'});
                    }} className="auth-state-button">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;