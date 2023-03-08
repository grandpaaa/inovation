import React from 'react'
import './index.css'
import line from '../../images/line.png'
import bed from '../../images/1.png'
import kitchen from '../../images/8.png'
import table from '../../images/3.png'
import pool from '../../images/2.png'

function About(){
    return(
        <div id="about" className='Section about'>
            <div className='about_top'>
                <img src={line}/>
                <h1>О нас</h1>
            </div>
            <div className='about_bottom'>
                <div className='b_1'>
                    <p className='about_p'>- Nero & Bianca - Высокогорное шале, расположенные в окружении величественных горных массивов Зайлийского Алатау. Расположены рядом с подъемниками на горном курорте Шымбулак</p>
                    <p className='about_p'>- Nero & Bianca - Высокогорное шале, расположенные в окружении величественных горных массивов Зайлийского Алатау. Расположены рядом с подъемниками на горном курорте Шымбулак</p>
                </div>
                <div className='b_2'>
                    <div className='more'>
                        <img src={kitchen}></img>
                        <div className='more_text'>3 спальни с собственным выходом на террасу</div>
                        <div className='more_text_after'>3 спальни с собственным выходом на террасу</div>
                    </div>  
                    <div className='more'>
                        <img src={table}></img>
                        <div className='more_text'>Обеденный стол на 8 человек</div>
                        <div className='more_text_after'>Обеденный стол на 8 человек</div>
                    </div>
                    <div className='more'>
                        <img src={kitchen}></img>
                        <div className='more_text'>Полностью оснащенная кухны</div>
                        <div className='more_text_after'>Полностью оснащенная кухны</div>
                    </div>
                    <div className='more'>
                        <img src={pool}></img>
                        <div className='more_text'>Бассейн с сауной</div>
                        <div className='more_text_after'>Бассейн с сауной</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About




{/* <div className='about_container'>
                <div className='about_top'>
                    <img src={line}/>
                    <h1>О нас</h1>
                </div>
                <div className='about_bottom'>
                    <div className='b_1'>
                        <p className='about_p'>- Nero & Bianca - Высокогорное шале, расположенные в окружении величественных горных массивов Зайлийского Алатау. Расположены рядом с подъемниками на горном курорте Шымбулак</p>
                        <p className='about_p'>- Nero & Bianca - Высокогорное шале, расположенные в окружении величественных горных массивов Зайлийского Алатау. Расположены рядом с подъемниками на горном курорте Шымбулак</p>
                    </div>
                    <div className='b_2'>
                        <div className='more'>
                            <img src={kitchen}></img>
                            <div className='more_text'>3 спальни с собственным выходом на террасу</div>
                        </div>  
                        <div className='more'>
                            <img src={table}></img>
                            <div className='more_text'>Обеденный стол на 8 человек</div>
                        </div>
                        <div className='more'>
                            <img src={kitchen}></img>
                            <div className='more_text'>Полностью оснащенная кухны</div>
                        </div>
                        <div className='more'>
                            <img src={pool}></img>
                            <div className='more_text'>Бассейн с сауной</div>
                        </div>
                    </div>
                </div>
            </div> */}
