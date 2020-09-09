import React, {ChangeEvent, useState} from 'react';

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('This is IT')

    let onInputEntertext = (event: ChangeEvent<HTMLInputElement>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        let inputText = event.currentTarget.value
        setValue(inputText)
    }

    return <> <input onChange={onInputEntertext}/> - {value} </>
}

export const GetValueOfInputByButtonPress = () => {
    const [value, setValue] = useState('Enter a value')

    const inputRef = React.useRef<HTMLInputElement>(null)

    const onButtonClick = () => {
        let newValue = inputRef.current as HTMLInputElement
        setValue(newValue.value)
    }

    return <> <input ref={inputRef}/>
        <div>
            <button onClick={onButtonClick}>Get value</button>
            <div>
                value is: {value}
            </div>
        </div>
    </>
}

export const ControlledInputWithFixedValues = () => <input value={'Enter text'}/>