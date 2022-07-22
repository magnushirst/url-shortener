import React from 'react';

import { Navigation } from './navigation';
import { MemoryRouter as Router } from 'react-router-dom';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Router><Navigation {...args} /></Router>;

export const Default = Template.bind({});
Default.args = {};
