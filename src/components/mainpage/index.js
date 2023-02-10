import React from 'react'
import './index.css'
import img from '../../line1.png'
import whats from '../../11.png'
import phone from '../../22.png'
import inst from '../../33.png'
import sun from '../../images/sun.png'
import clock from '../../images/clock.png'
import people from '../../images/people.png'
import club from '../../images/club.png'
import { Image } from '@chakra-ui/react'
import Header from '../../components/header'

function MainPage(){
    return(
        <div className="mainpage" id="home">
            <Header/>
            <div className='top'>
                <p>Nerobianca</p>
                <h1>Высокогорное шале</h1>
                <p>Расположены в окружении величественных горных массивов Заилийского Алатау, рядом с подъемниками на горном курорте Шымбулак.</p>
                <a className='button'>Забронировать</a>
            </div>
            <div className='navblock'>
                <div className='navbar'><img src={inst}></img></div>
                <div className='navbar'><img src={phone}></img></div>
                <div className='navbar'><img src={whats}></img></div>
            </div>
            <div className='bottom'>
                <div className='bottom_container'>
                    <div className='maindesc'>
                        <div className='desc_img' style={{width: '80px', height: '80px'}}>
                            <img src={people} className='people'></img>
                        </div>
                        <div className='maintext'>
                            <h5>556 Человек</h5>
                            <p>Количесвто довольных гостей которые у нас проживали</p>
                        </div>
                    </div>
                    <div className='maindesc' >
                        <div className='desc_img'  style={{width: '60px', height: '60px'}}>
                            <img src={sun}  className='sun'></img>
                        </div>
                        <div className='maintext'>
                            <h5>300 Дней</h5>
                            <p>Солнечных дней в году</p>
                        </div>
                    </div>
                    <div className='maindesc'>
                        <div className='desc_img'  style={{width: '60px', height: '60px'}}>
                            <img src={clock}  className='clock'></img>
                        </div>
                        <div className='maintext'>
                            <h5>21 528 Часов</h5>
                            <p>Столько наши гости провели времени в шале</p>
                        </div>
                    </div>
                    <div className='maindesc' >
                        <div className='desc_img'  style={{width: '60px', height: '60px'}}>
                            <img src={club}  className='club'></img>
                        </div>
                        <div className='maintext'>
                            <h5>21 Мероприятие</h5>
                            <p>Мы провели в наших шале</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_image'>
                <img src={img}/>
            </div>
        </div>
    )
}

export default MainPage