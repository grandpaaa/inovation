import React from 'react'
import './index.css'
import check from '../../images/check.png'
import line from '../../images/line.png'

function Services(){
    const items = ['3 спальни с выходом на террасу', '5 санузлов', 'Гостиная', 'Обеденный стол на 8 человек', 'Полностью оснащенная кухня', 'Бассейн с сауной с выходом на террассу и видом на горы', 'Зона барбекю', 'Услуги горничных'];
    const servs = items.map((item, i) => <div className='servs_name'>
        <p className='' style={{marginRight: '50px', width: '631px'}}>{item}</p>
        <img src={check}/>
    </div>)

    return(
        <div id="services" className='Section services'>
            <div className='serv_container'>
                <div className='s_main'>
                    <img src={line}/>
                    <h1>Шале</h1>
                </div>
                {servs}
                <div className='book'>
                    <a>Забронировать</a>
                </div>
            </div>
        </div>
    )
}

export default Services