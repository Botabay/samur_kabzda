import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { action } from '@storybook/addon-actions'

export default {
    title: ' Accordion stories',
    component: Accordion
}
// type propsType={
//     title:string,
//     itemsCount:number,
//     collapsed: boolean
// }
// // const f=action('click')
// export const OnMode1 = () => <OnOffComponent turnedOn={true} callback={f}/>
// export const OffMode1 = () => <OnOffComponent turnedOn={false} callback={f}/>

export const CollapsedMode = () =>
    <Accordion title={'collapsed mode'} itemsCount={2} collapsed={true} onChange={()=>{}}/>
export const UncollapsedMode = () =>
    <Accordion title={'uncollapsed mode'} itemsCount={2} collapsed={false} onChange={()=>{}}/>

export const ToChangeMode = () => {
    const [r, setR] = useState<boolean>(true);
    return <Accordion title={'change mode'} itemsCount={2} collapsed={r} onChange={()=>setR(!r)}/>
}