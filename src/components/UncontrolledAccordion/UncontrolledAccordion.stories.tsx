import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Off was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={action('!!!')}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={action('!')} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=> setValue(!value)} />
}
