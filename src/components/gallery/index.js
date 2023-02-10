import React from 'react'
import './index.css'
import Carousel from "react-multi-carousel";
import { Image } from 'antd';
import "react-multi-carousel/lib/styles.css";
import g1 from '../../images/gallery/1.png'
import g2 from '../../images/gallery/2.png'
import g3 from '../../images/gallery/3.png'
import g4 from '../../images/gallery/4.png'
import line from '../../images/line.png'

function Gallery(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
        <div id="gallery Section" className='Section gallery'>
            <div className='gallery_name'>
                <img src={line}/>
                <h1>Галерея</h1>
            </div>
            <Carousel responsive={responsive} className='gal'>
                <div className='gal_img'><Image src={g1}/></div>
                <div className='gal_img'><Image src={g2}/></div>
                <div className='gal_img'><Image src={g3}/></div>
                <div className='gal_img'><Image src={g4}/></div>
                <div className='gal_img'><Image src={g2}/></div>
                <div className='gal_img'><Image src={g1}/></div>
                <div className='gal_img'><Image src={g3}/></div>
            </Carousel>
        </div>
    )
}

export default Gallery