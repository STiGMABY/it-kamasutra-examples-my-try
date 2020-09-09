import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('On or Off was clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />;
export const BugMode = () => <div>Unsync when changing defaultValue when alredy rendered</div>
export const DefaultInputValue = () => <input defaultValue={'Enter something'} />
