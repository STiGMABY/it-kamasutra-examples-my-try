import React from 'react';

type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=> void
    items: Array<ItemType>
    onClick: (value: any)=> void
}
//Правильное условие фильтрации
function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

//Дублирование кода !!!!
// function Accordion(props: AccordionPropsType) {
//     if(props.collapsed){
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     }
//     else return <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody />
//     </div>
// }

type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
        </div>
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {
                    props.items.map( (i, index) => <li
                        onClick={ ()=> {props.onClick(i.value) } }
                        key={index}>{i.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Accordion;
