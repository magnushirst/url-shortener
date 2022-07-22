import React from 'react';
import { AllLinks } from './allLinks';

export default {
  title: 'Pages/All Links',
  component: AllLinks,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AllLinks {...args} />;

export const Default = Template.bind({});
Default.args = {};
