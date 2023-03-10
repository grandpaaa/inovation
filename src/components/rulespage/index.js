import React from 'react'
import './index.css'
import line from '../../images/line.png'
import check from '../../images/check.png'

function RulesPage(){
    const rules = ['Заезд осуществляется в 15:00, если не было иной договоренности', 'Выезд до 12:00, если не было иной договоренности', 'При выезде из дома за 30 минут сообщить об этом управляющему', 'При проживании необходимо соблюдать правила пожарной безопасности', 'Курить в строго отведенных для этого местах', 'Запрещено курение табачных изделий и кальяна в доме', 'Для приготовления барбекю разрешено использовать только угли', 'Запрещено приезжать с животными без предварительного предупреждения', 'Мы принимаем гостей только с собаками ручных пород (йорк, той, чихуахуа) при условии брать на себя полную ответственность за сохранность имущества от повреждений и запахов', 'Запрещено приносить в дом взрывчатые и токсичные материалы', `Не использовать на территории дома пиротехнические средства
    (петарды, фейерверки, световые ракеты)`, 'Запрещено передвигать мебель либо выносить ее на улицу', 'Запрещено забирать с собой декор, детали интерьера и прочее', 'В случае утраты или повреждения имущества проживающие возмещают стоимость нанесенного ущерба в полном объёме', 'Средства личной гигиены разрешено выкидывать только в урны для мусора', 'Рекомендуем соблюдать технику безопасности при посещении бассейна и сауны']

    const rule = rules.map((item, i) => <div className='rules_name'>
    <img src={check} style={{marginRight: '50px'}}/>
    <p className='' >{item}</p>
    </div>)

    return(
        <div className='rulespage'>
            <div className='rules_container'>
                <div className='r_top'>
                    <div className='r_main'>
                        <img src={line}/>
                        <h1>Правила</h1>
                    </div>
                    <p>Мы ценим ваше расположение и хотели бы познакомить Вас с правилами в доме для Вашего качественного отдыха:</p>
                </div>
                {rule}
                <div className='r_book'>
                    <a>Забронировать</a>
                </div>
            </div>
        </div>
    )
}

export default RulesPage