import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Off was clicked')
const onClick = action('Some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={action('!!!')}
                                                  onClick={onClick}
                                                  items={[
                                                      {title: 'Andrei', value: 1},
                                                      {title: 'Lera', value: 2},
                                                      {title: 'Musia', value: 3}
                                                  ]}/>;

export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'}
                                                     collapsed={false}
                                                     onChange={action('!')}
                                                     onClick={onClick}
                                                     items={[{title: 'Andrei', value: 1},
                                                         {title: 'Lera', value: 2},
                                                         {title: 'Musia', value: 3}
                                                         ]}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={onClick}
                      items={[
                          {title: 'Andrei', value: 1},
                          {title: 'Lera', value: 2},
                          {title: 'Musia', value: 3}
                      ]}/>
}
