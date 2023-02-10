import React from 'react'
import './index.css'
import line from '../../images/line2.png'
import gid from '../../images/11.png'
import banya from '../../images/22.png'
import spa from '../../images/33.png'
import walks from '../../images/44.png'
import bbq from '../../images/55.png'
import photo from '../../images/66.png'
import chief from '../../images/77.png'
import icon from '../../images/s_icon.png'

function MoreServs(){
    const more = [{
            img: chief,
            title: 'Личный Шеф-Повар',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: photo,
            title: 'Фотосессия',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: gid,
            title: 'SPA - процедуры',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: walks,
            title: 'Конные прогулки',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: banya,
            title: 'Банщик',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: bbq,
            title: 'Барбекю сеты',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: spa,
            title: 'Мероприятия',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        },
        {
            img: gid,
            title: 'Горный гид',
            icon: icon,
            desc: 'Мы организуем и проведем для Вас тимбилдинг, ретриты, веселый праздник',
        }
    ]

    const more_name = more.map((item, i) =>
        // <div className='more_item'>
        //     <img src={item.img}/>
        //     <div className='more_title'>
        //         {item.title}
        //         <p>{item.desc}</p>    
        //     </div>
        // </div>
        <div className='card'>
            <div className='poster'>
                <img src={item.img}/>
            </div>
            <div className='details'>
                <h1 className='card_title'>{item.title}</h1>
                <p>{item.desc}</p>
            </div>
        </div>
    )

    return(
        <div id="more_servs Section" className='Section more_servs'>
            <div className='more_name'>
                <img src={line}/>
                <h1>Дополнительные услуги</h1>
            </div>
            <div className='more_main'>
                {more_name}
            </div>
            <div className='more_bottom'>
                <div className='mb_1'>
                    <h1>Больше фотографий в</h1>
                    <div className='mb_1_bg'></div>
                </div>
                <div className='mb_2'>
                    <div className='mb_2_bg'></div>
                    <h1><a>Instagram</a></h1>
                </div>
            </div>
        </div>
    )
}

export default MoreServs