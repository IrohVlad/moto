import React from 'react';
import Transition from '../func/Transition';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import IMask from 'imask'
import './style.scss'

const ResultsPage = () => {
    const [number, setNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('');
    const nodeRef = React.useRef(null)
    const navigate = useNavigate();
    const maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    }
    let masked;
    React.useEffect(()=>{
        masked = new IMask(document.getElementById('number'), maskOptions)
        masked.on('accept', ()=>{
            setNumber(masked.unmaskedValue)
        })
    }, [])
    return (
        <>
        <main>
            <section className='results-section'>
                <div className="results _container">
                <div className="nav">
                <svg onClick={()=>{navigate('/moto')}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M436.5 251.44a11.33 11.33 0 0 0-2.36-3.46L323 136.86a11.34 11.34 0 0 0-16 16l91.78 91.77H86.57a11.34 11.34 0 0 0 0 22.68h312.18L307 359.11a11.34 11.34 0 1 0 16 16L434.14 264a11.33 11.33 0 0 0 2.36-12.56Z" fill="white" className="fill-262626"></path></svg>
                </div>
                <div className="content">
                        <div className="inner">
                            <div className="data">
                                <div className="result__track">
                                    <span>Track:</span> {JSON.parse(localStorage.getItem('track')).title}
                                </div>
                                <div className="result__mot">
                                    <span>Mot:</span>{JSON.parse(localStorage.getItem('mot')).title}
                                </div>
                            </div>
                            <TransitionGroup className='status'>
                                <CSSTransition classNames='fade' timeout={0} key={status} nodeRef={nodeRef}>
                                    <div ref={nodeRef}>
                                    {status}
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                            <form onSubmit={async (e)=>{
                                e.preventDefault()
                                if(email || number){
                                    try{
                                        const request = await fetch('http://127.0.0.1:7000/api/book', {
                                        method: 'POST',
                                        headers: {
                                          'content-type': 'application/json',
                                          'Accept': 'application/json'
                                        },
                                        body: JSON.stringify({email, number, track: JSON.parse(localStorage.getItem('track')).title, mot: JSON.parse(localStorage.getItem('mot')).title})
                                      })
                                      if(request.status == 200){
                                        setStatus('Заявка отправлена')

                                      } else {
                                        setStatus('Ошибка. Заявка не отправлена')
                                      }
                                    } catch{
                                        setStatus('Ошибка. Заявка не отправлена')
                                    }
                                } else{
                                    setStatus('Введите минимум один контакт')
                                }
                            }} action="POST">
                                <input type="email" value={email} onInput={(e)=>{
                                    setEmail(e.target.value)
                                }} placeholder='Email'/>
                                <input id='number' type="text" placeholder='Phone number'/>
                                <input type='submit' className="result__accept" value='Отправить заявку'/>

                            </form>
                        </div>
                </div>
            </div>
            </section>
        </main>
        </>
    );
};

export default Transition(ResultsPage);