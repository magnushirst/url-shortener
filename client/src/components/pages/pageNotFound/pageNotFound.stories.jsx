import React from 'react';
import { PageNotFound } from './pageNotFound';

export default {
  title: 'Pages/Page Not Found',
  component: PageNotFound,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PageNotFound {...args} />;

export const Default = Template.bind({});
Default.args = {};
