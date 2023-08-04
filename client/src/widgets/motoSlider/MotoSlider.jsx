import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../../features/slider/Slider';
import Texts from '../../features/texts/Texts';
import './style.scss'

const MotoSlider = ({motos}) => {
    const navigate = useNavigate();
    const [slide, setSlide] = React.useState(localStorage.getItem('mot') ? JSON.parse(localStorage.getItem('mot')).id : 0)
    return (
        <section className='moto-section'>
            <div className="moto _container">
                <div className="nav">
                <svg onClick={()=>{navigate('/map')}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M436.5 251.44a11.33 11.33 0 0 0-2.36-3.46L323 136.86a11.34 11.34 0 0 0-16 16l91.78 91.77H86.57a11.34 11.34 0 0 0 0 22.68h312.18L307 359.11a11.34 11.34 0 1 0 16 16L434.14 264a11.33 11.33 0 0 0 2.36-12.56Z" fill="white" className="fill-262626"></path></svg>
                </div>
                <div className="content">
                    <Texts defaultValues={{title: 'Мотоцикл', text: "Выберите мотоцикл"}} dataArr={motos} index={slide} />
                    <Slider index={slide} dataArr={motos} setFunc={setSlide} first={'https://avtoshkola177.ru/wp-content/uploads/2020/10/moto1.jpg'} />
                </div>
                <div onClick={()=>{
                    localStorage.setItem('mot', JSON.stringify({...motos[slide], id: slide}))
                    navigate('/results')
                    }} className={slide == 0 ? "button-accept" : "button-accept button-accept-active"}>
                    Подтвердить
                </div>
            </div>
        </section>
    );
};

export default MotoSlider;