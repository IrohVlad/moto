import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'
import Slider from '../../features/slider/Slider';
import Texts from '../../features/texts/Texts';

const MapSlider = ({maps}) => {
    const navigate = useNavigate();
    const [slide, setSlide] = React.useState(localStorage.getItem('track') ? JSON.parse(localStorage.getItem('track')).id : 0)
    // React.useEffect(()=>{
    //     if(localStorage.getItem('map')){
    //         setSlide(localStorage.getItem('map'))
    //         console.log(slide)
    //     }
    // }, [])

    return (
        <section className='map-slider-section'>
            <div className="map-slider _container">
                <div className="nav">
                <svg onClick={()=>{navigate('/')}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M436.5 251.44a11.33 11.33 0 0 0-2.36-3.46L323 136.86a11.34 11.34 0 0 0-16 16l91.78 91.77H86.57a11.34 11.34 0 0 0 0 22.68h312.18L307 359.11a11.34 11.34 0 1 0 16 16L434.14 264a11.33 11.33 0 0 0 2.36-12.56Z" fill="white" className="fill-262626"></path></svg>
                </div>
                <div className="content">
                    <Texts defaultValues={{title: 'Трасса', text: "Выберите трассу"}} dataArr={maps} index={slide} />
                    <Slider index={slide} dataArr={maps} setFunc={setSlide} first={'https://i.pinimg.com/originals/e5/10/62/e5106283752099b71d26c5dd5694fb0b.jpg'} />
                    
                </div>
                <div onClick={()=>{
                    localStorage.setItem('track', JSON.stringify({...maps[slide], id: slide}))
                    navigate('/moto')
                    }} className={slide == 0 ? "button-accept" : "button-accept button-accept-active"}>
                    Подтвердить
                </div>
            </div>
        </section>
    );
};

export default MapSlider;