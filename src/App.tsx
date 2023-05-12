import { Rating } from "./components/Rating/Rating";
import { Accordion } from "./components/Accordion/Accordion";
import { AppTitle } from "./components/AppTitle/AppTitle";
import {OnOffComponent} from './components/OnOffComponent/OnOffComponent'
import {UncontrolledInlineCssOnOffComponent} from './components/UncontrolledInlineCssOnOffComponent/UncontrolledInlineCssOnOffComponent'
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { useState } from "react";
import {ratingValueType} from './components/Rating/Rating'
import {InlineCssOnOffComponent} from './components/InlineCssOnOffComponent/InlineCssOnOffComponent'

export const App = () => {
    const [starCountSt,setStarCountSt]=useState<ratingValueType>(1)
    const [onSt,setOnSt]=useState<boolean>(false)
    return (
        <div className="App">
            <AppTitle text='the text if for AppTitle' />

            <Rating starCount={starCountSt} onClick={setStarCountSt}/>
            <Accordion title='title one' itemsCount={5} collapsed={false} setOnSt={setOnSt}/>
            <Rating starCount={starCountSt} onClick={setStarCountSt}/>
            <Accordion title='title two' itemsCount={2} collapsed={true} setOnSt={setOnSt} />
            <div>-----------------------------------------------------</div>
            <OnOffComponent turnedOn={true} callback={x=>x}/>
            <OnOffComponent turnedOn={false} callback={x=>x}/> 
            <div>-----------------------------------------------------</div>

            <UncontrolledInlineCssOnOffComponent call={setOnSt}/> {onSt.toString()}
            {/* <InlineCssOnOffComponent onClick={(dd)=>setOnSt(dd)} value={onSt}/> */}
            <InlineCssOnOffComponent onClick={setOnSt} value={onSt}/>

            <UncontrolledAccordion title='title UncontrolledAccordion' itemsCount={3}/> 
            
            <UncontrolledRating defaultValue={1} onChange={()=>{}}/>
        </div>
    );
}
