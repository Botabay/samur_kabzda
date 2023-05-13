import { useState, useRef } from 'react'
export default {
    title: 'learn input'
}

/**
 * 
 * uncontrolled input is not good thing for any project
 */
export const UncontrolledInput = () => <input />

export const ControlledInputWithFixedValue = () => <input value={'ControlledInputWithFixedValue'} />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <>
        <input value={value} onChange={(e) => {
            setValue(e.currentTarget.value)
        }} /> {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)
    return <>
        <input ref={ref} />
        <button onClick={() => { setValue(ref.current ? ref.current.value : '') }}>get inputValue</button>
        {value}
    </>
}