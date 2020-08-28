import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from './components/Accordion/Accordion';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            <OnOff on={switchOn} onChange={ setSwitchOn }/>
            {/*<OnOff />*/}
            {/*/!*<PageTitle title={'This is my title'}/>*!/*/}

            {/*<UncontrolledAccordion titleValue={'UncontrolledAccordion'}*/}
            {/*           //collapsed={false}*/}
            {/*/>*/}
            {/*Uncontrolled Rating tsx:*/}
            {/*<UncontrolledRating />*/}
            {/*Rating tsx:*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={ ()=> { setAccordionCollapsed(!accordionCollapsed) } }*/}
            {/*/>*/}
            {/*Рейтинг 2:*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
