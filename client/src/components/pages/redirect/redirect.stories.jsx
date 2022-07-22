import React from 'react';
import { Redirect } from './redirect';

export default {
  title: 'Pages/Redirect',
  component: Redirect,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Redirect {...args} />;

export const Default = Template.bind({});
Default.args = {};
