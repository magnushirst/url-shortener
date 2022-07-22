import React from 'react';
import { Index } from './index';

export default {
  title: 'Pages/Index',
  component: Index,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Index {...args} />;

export const Default = Template.bind({});
Default.args = {};