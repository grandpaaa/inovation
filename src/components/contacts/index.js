import React from 'react'
import './index.css'
import whats from '../../11.png'
import phone from '../../22.png'
import inst from '../../33.png'
import line from '../../images/line2.png'
import mail from '../../images/mail.png'
import ph from '../../images/phone1.png'
import geo from '../../images/geo.png'
import map from '../../images/map.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Contacts(){
    return(
        <div className='contact_page'>
            <div className='contacts'>
                {/* <div className='map'>
                    <img src={map}/>
                </div>  */}
                {/* <div className='map-responsive'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11626.636613054536!2d76.90667165!3d43.237605450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883693c8b19e805%3A0xb36711f93edfc207!2z0JTQvtC8LdGA0LXRgdGC0L7RgNCw0L0g0KHQp9CQ0KHQotCs0JU!5e0!3m2!1sru!2skz!4v1677834887189!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <div class="mapouter"><div class="gmap_canvas"><iframe style={{width: '100%'}} height="810" id="gmap_canvas" src="https://maps.google.com/maps?q=Almaty Шымбулак&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
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



{/* <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="Map data © OpenStreetMap contributors"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11650.447646459193!2d77.10257643615083!3d43.11267011629471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38837e9a33c0c265%3A0x8c13ed89d82ce2a!2z0KjRi9C80LHSsdC70LDSmw!5e0!3m2!1sen!2skz!4v1677826010604!5m2!1sen!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                {/* <div class="mapouter"><div class="gmap_canvas"><iframe style={{width: '50%'}} height="810" id="gmap_canvas" src="https://maps.google.com/maps?q=Almaty Шымбулак&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div> */}