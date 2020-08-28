import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=> void
}
//Правильное условие фильтрации
function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody />}
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
            <h3 onClick={props.onChange}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;
