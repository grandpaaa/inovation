import React from 'react'
import './index.css'
import Carousel from "react-multi-carousel";
import line from '../../images/line.png'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'

function Reviews(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
    };
    return(
        <div id="reviews" className='Section reviews'>
            <div className='review_top'>
                <img src={line}/>
                <h1>Что о нас говорят?</h1>
            </div>
            <Carousel responsive={responsive} className='review_c'>
                <div className='review_block'>
                  <img src={r1} className='ava'/>
                  <div className='review_text_block'>
                    <h1>Асель</h1>
                    <p>На отдых пригласили друзья. Я никогда не любила отдых на природе, но была приятно удивлена, как же здесь чисто и комфортно. Персонал всегда вежлив и готов помочь, а вид из окна просто изумительный.</p>
                  </div>
                </div>
                <div className='review_block'>
                  <img src={r2} className='ava'/>
                  <div className='review_text_block'>
                    <h1>Нурбек</h1>
                    <p>На отдых пригласили друзья. Я никогда не любила отдых на природе, но была приятно удивлена, как же здесь чисто и комфортно. Персонал всегда вежлив и готов помочь, а вид из окна просто изумительный.</p>
                  </div>
                </div>
                <div className='review_block'>
                  <img src={r3} className='ava'/>
                  <div className='review_text_block'>
                    <h1>Аскар</h1>
                    <p>На отдых пригласили друзья. Я никогда не любила отдых на природе, но была приятно удивлена, как же здесь чисто и комфортно. Персонал всегда вежлив и готов помочь, а вид из окна просто изумительный.</p>
                  </div>
                </div>
                <div className='review_block'>
                  <img src={r1} className='ava'/>
                  <div className='review_text_block'>
                    <h1>Асель</h1>
                    <p>На отдых пригласили друзья. Я никогда не любила отдых на природе, но была приятно удивлена, как же здесь чисто и комфортно. Персонал всегда вежлив и готов помочь, а вид из окна просто изумительный.</p>
                  </div>
                </div>

            </Carousel>
        </div>
    )
}

export default Reviews