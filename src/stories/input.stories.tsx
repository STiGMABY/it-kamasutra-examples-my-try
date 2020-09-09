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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onInputChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onInputChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onSelectChange}>
        <option>none</option>
        <option value={'1'}>Grodno</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Brest</option>
        </select>
}

export const ControlledInputWithFixedValues = () => <input value={'Enter text'}/>