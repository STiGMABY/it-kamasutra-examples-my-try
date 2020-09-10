import React, {useState} from 'react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue: React.FC<SelectPropsType> = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {title: 'Grodno', value: '1'},
                    {title: 'Minsk', value: '2'},
                    {title: 'Brest', value: '3'}
                ]}
        />
    </>
}

export const WithoutValue: React.FC<SelectPropsType> = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {title: 'Grodno', value: '1'},
                    {title: 'Minsk', value: '2'},
                    {title: 'Brest', value: '3'}
                ]}
        />
    </>
}