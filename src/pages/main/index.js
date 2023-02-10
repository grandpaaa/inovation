import React from 'react'
import About from '../../components/about'
import Gallery from '../../components/gallery'
import Header from '../../components/header'
import MainPage from '../../components/mainpage'
import Reviews from '../../components/reviews'
import Services from '../../components/services'
import MoreServs from '../../components/moreservs'
import Contacts from '../../components/contacts'

function Main(){
    return(
        <div>
            <MainPage/>
            <About/>
            <Services/>
            <Gallery/>
            <MoreServs/>
            <Reviews/>
            <Contacts/> 
        </div>
    )
}

export default Main