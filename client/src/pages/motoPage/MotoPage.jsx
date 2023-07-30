import React from 'react';
import Transition from '../func/Transition';
import MotoSlider from '../../widgets/motoSlider/MotoSlider';
const MotoPage = ({motos}) => {

    return (
        <>
        <MotoSlider motos={[
             {
                title: 'Miami',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum, saepe penam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://krot.info/uploads/posts/2021-11/1636510512_7-krot-info-p-mototsikl-neon-krasivo-foto-7.jpg'
            },
            {
                title: 'Nursultan',
                text: 'Lomet consectetur adipisicing elit. Veritatis eos in obcaecati nobie? Laborum, saepe perspiciatis nihil dolorum minus nam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://img1.goodfon.ru/original/2048x1439/1/89/bayk-motocikl-harley-davidson-6078.jpg'
            },
            {
                title: 'Los Santos',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum,  nihil dolorum minus nam velit quod cupe aut voluptate accusamus suscipit assumenda',
                img: 'https://i.pinimg.com/originals/63/b8/31/63b83157b3fc65fd9cbdf558e01e3888.jpg'
            },
            {
                title: 'Miami',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum, saepe penam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://krot.info/uploads/posts/2021-11/1636510512_7-krot-info-p-mototsikl-neon-krasivo-foto-7.jpg'
            },
            {
                title: 'Nursultan',
                text: 'Lomet consectetur adipisicing elit. Veritatis eos in obcaecati nobie? Laborum, saepe perspiciatis nihil dolorum minus nam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://m.media-amazon.com/images/I/71F52Qh1HmL._AC_SL1500_.jpg'
            },
            {
                title: 'Los Santos',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum,  nihil dolorum minus nam velit quod cupe aut voluptate accusamus suscipit assumenda',
                img: 'https://i.pinimg.com/originals/63/b8/31/63b83157b3fc65fd9cbdf558e01e3888.jpg'
            },
        ]}/>
        </>
    );
};

export default Transition(MotoPage);