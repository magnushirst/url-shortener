import React from 'react';

import { Title } from './title';

export default {
    title: 'Atoms/Title',
    component: Title,
};

const Template = (args) => <Title {...args}>Hello World</Title>;

export const Default = Template.bind({});
Default.args = {};
