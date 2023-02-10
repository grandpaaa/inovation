import React from 'react'
import './index.css'
import whats from '../../11.png'
import phone from '../../22.png'
import inst from '../../33.png'
import line from '../../images/line2.png'
import mail from '../../images/mail.png'
import ph from '../../images/phone1.png'
import geo from '../../images/geo.png'

function Contacts(){
    return(
        <div className='contact_page'>
            <div className='contacts'>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="780" height="810" id="gmap_canvas" src="https://maps.google.com/maps?q=Almaty Шымбулак&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                <div className='contact_info'>
                    <div className='contact_name'>
                        <img src={line}/>
                        <h1>Контакты</h1>
                    </div>
                    <div className='c_data'>
                        <div className='d_1'>
                            <div className='d_1_img'>    
                                <img src={mail}/>
                            </div>
                            <a href='#'>booking@nerobianca.kz</a>
                        </div>
                        <div className='d_1'>
                            <div className='d_1_img'>
                                <img src={ph}/>
                            </div>
                            <a href='#'>+7 778 202 6411</a>
                        </div>
                        <div className='d_1'>
                            <div className='d_1_img'>
                                <img src={geo}/>
                            </div>
                            <a href='#'>Алматы, ул. Керей-Жанибек хандар, 513</a>
                        </div>
                    </div>
                    <div className='contacts_input'>
                        <div className='c_input'><input placeholder='Имя'/></div>
                        <div className='c_input'><input placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'/></div>
                        <div className='c_book'>
                            <a>Забронировать</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navblock'>
                <div className='navbar'><img src={inst}></img></div>
                <div className='navbar'><img src={phone}></img></div>
                <div className='navbar'><img src={whats}></img></div>
            </div>
        </div>
    )
}

export default Contacts

{/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:810px;width:780px;}</style> */}
{/* <style>.mapouter{position:relative;text-align:right;height:810px;width:780px;}</style> */}