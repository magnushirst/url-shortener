import React from 'react';

import { InputText } from './inputText';

export default {
    title: 'Atoms/Input Text',
    component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Enter Your Url',
    size: 'medium'
};
