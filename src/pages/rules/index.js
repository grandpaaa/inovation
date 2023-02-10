import React from 'react'
import RulesMain from '../../components/rulesmain'
import Contacts from '../../components/contacts'
import About from '../../components/about'
import RulesPage from '../../components/rulespage'
import Thx from '../../components/thx'


function Rules(){
    return(
        <div>
            <RulesMain/>
            <RulesPage/>
            <Thx/>
            <Contacts/>
        </div>
    )
}

export default Rules