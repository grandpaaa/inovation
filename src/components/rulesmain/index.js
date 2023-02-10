import React from 'react'
import './index.css'
import Header from '../../components/header'
import Contacts from '../contacts'

function RulesMain(){
    return(
        <div className="rules_main" id="home">
            <Header/>
            <div className='rules_text'>
                <div className='effect'><h1>Правила</h1></div>
            </div>
        </div>
    )
}

export default RulesMain