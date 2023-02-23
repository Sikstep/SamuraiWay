import React, {useState} from 'react';
import classes from './App.module.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOffButton} from './components/OnOff/OnOff';
import {UncontrelledAccordion} from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';


const App = () => {
    // полезное что - то
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);


    const [msg, setMsg] = useState('');
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordion, setAccordion] = useState(true);
    const addMessage = (title: string) => {
        const newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const newMessageAdd = () => {
        addMessage(msg);
        setMsg('');
    }

    return (
        <div className={classes.App}>

            <Accordion titleValue={'--Users--'} collapsed={accordion} setAcc={setAccordion}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating />

            <OnOffButton/>

            <UncontrelledAccordion titleValue={'Menu'}/>

        </div>
    );
}

export default App;
