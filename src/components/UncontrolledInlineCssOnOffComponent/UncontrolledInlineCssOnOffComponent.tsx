import { useState } from "react"
type propsType={
    defaultMode:boolean
    callback:()=>void
}
export const UncontrolledInlineCssOnOffComponent=(props:any)=>{
    const [onSt,setOnSt]=useState<boolean>(props.defaultMode)
    const onStyle={
        display:'inline-block',
        width: '30px',
        border:'1px solid black',
        backgroundColor:onSt?'green':'',
        marginLeft:'10px'
    }
    const offStyle={
        display:'inline-block',
        width: '30px',
        backgroundColor:onSt?'':'red',
        border:'1px solid black',
        marginLeft:'10px'
    }
    const switcherStyle={
        display:'inline-block',
        width: '10px',
        height:'10px',
        backgroundColor: onSt?'green':'red',
        borderRadius:'50%',
        border:'1px solid black',
        marginLeft:'10px'
    }
    return (
        <div>
            <span style={onStyle}  onClick={()=>{setOnSt(!onSt);props.callback()}}>on</span>
            <span style={offStyle}  onClick={()=>{setOnSt(!onSt);props.callback()}}>off</span>
            <span style={switcherStyle}></span>
        </div>
    )
}