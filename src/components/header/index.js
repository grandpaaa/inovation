import React from 'react'
import img from '../../image.png'
import { Link } from 'react-scroll'
import './index.css'

function Header(){
    return(
        <header className='header'>
            <div className='container'>
                <div className='navContainer'>
                    <div className='logo'>
                        <img src={img}/>
                    </div>
                    <div className='nav'>
                        {/* {links} */}
                        <ul>
                            <li>
                                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Главная</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>О нас</Link>
                            </li>
                            <li>
                                <Link to="services" spy={true} smooth={true} offset={50} duration={500}>Услуги</Link>
                            </li>
                            <li>
                                <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>Галерея</Link>
                            </li>
                            <li>
                                <Link to="reviews" spy={true} smooth={true} offset={50} duration={500}>Отзывы</Link>
                            </li>
                            <li>
                                <Link to="rules" spy={true} smooth={true} offset={50} duration={500}>Правила</Link>
                            </li>
                            <li>
                                <Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>Контакты</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


