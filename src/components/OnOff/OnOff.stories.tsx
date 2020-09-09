import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('Off was clicked')

export const OnMode = () => <OnOff on={true} onChange={action('On was clicked')} />;
export const OffMode = () => <OnOff on={false} onChange={callback} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={setValue} />
}
