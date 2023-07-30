import React from 'react';
import { useNavigate } from 'react-router-dom';
import layer1 from './assets/layer01.png';
import layer2 from './assets/layer02.png';
import layer3 from './assets/layer03.png';
import layer4 from './assets/layer04.png';
import layer5 from './assets/layer05.png';

const Hero = () => {
    const navigate = useNavigate();
    const hero = React.useRef()
    window.addEventListener('mousemove', e => {
        if(hero.current){
            hero.current.style = `--movex: ${(e.clientX - window.innerWidth/2) * -.007}deg; --movey: ${(e.clientY - window.innerHeight/2) * .007}deg; `
        }
    })
    return (
        <section className='hero-section'>
            <div ref={hero} className="hero">
                <div className="layer-1">
                <img src={layer1} alt="" />
                </div>
                <div className="layer-2">
                <img src={layer2} alt="" />
                </div>
                <div className="layer-3">
                    <img src={layer3} alt="" />
                </div>
                <div className="layer-4">
                    <img src={layer4} alt="" />
                </div>
                <div className="layer-5 _no-select">
                    <div className="hero__text">Аренда и прокат <br></br> мотоцикла в Москве</div>
                    <div className="hero__subtext">Ленинский проспект 30 (м. Ленинский проспект)</div>
                    <div className="line">
                        <div onClick={()=>{navigate('/map')}} className="hero__button">Забронировать МОТ</div>
                        <ul className="hero__links">
                            <li className="hero__link">
                                <img src="" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;