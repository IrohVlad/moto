import React from 'react';
import MapSlider from '../../widgets/mapSlider/MapSlider';
import Transition from '../func/Transition';

const MapPage = () => {
    return (
        <>
        <MapSlider maps={[
            {
                title: 'Miami',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum, saepe penam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://files.libertycity.net/download/gtavc_global/thumbs/2021-03/grand-theft-auto-vice-city-classic_1639840870_996762.jpg'
            },
            {
                title: 'Nursultan',
                text: 'Lomet consectetur adipisicing elit. Veritatis eos in obcaecati nobie? Laborum, saepe perspiciatis nihil dolorum minus nam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://i.ytimg.com/vi/yJnd8xZIrBE/maxresdefault.jpg'
            },
            {
                title: 'Los Santos',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum,  nihil dolorum minus nam velit quod cupe aut voluptate accusamus suscipit assumenda',
                img: 'https://funart.pro/uploads/posts/2022-08/1660087765_33-funart-pro-p-gta-vais-siti-art-krasivo-33.jpg'
            },
            {
                title: 'Moscow',
                text: 'text4',
                img: 'https://files.libertycity.ru/download/gtavs_textures/thumbs/ianefdqtam1g0aboe4cnip63a3/15575119869166_1.jpg'
            },
            {
                title: 'Nursultan',
                text: 'Lomet consectetur adipisicing elit. Veritatis eos in obcaecati nobie? Laborum, saepe perspiciatis nihil dolorum minus nam velit quod cupiditate aut voluptate accusamus suscipit assumenda autem?',
                img: 'https://i.ytimg.com/vi/yJnd8xZIrBE/maxresdefault.jpg'
            },
            {
                title: 'Los Santos',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eos in obcaecati nobis cupiditate? Laborum,  nihil dolorum minus nam velit quod cupe aut voluptate accusamus suscipit assumenda',
                img: 'https://funart.pro/uploads/posts/2022-08/1660087765_33-funart-pro-p-gta-vais-siti-art-krasivo-33.jpg'
            },
            {
                title: 'Moscow',
                text: 'text4',
                img: 'https://files.libertycity.ru/download/gtavs_textures/thumbs/ianefdqtam1g0aboe4cnip63a3/15575119869166_1.jpg'
            },
        ]}/>
        </>
    );
};

export default Transition(MapPage);