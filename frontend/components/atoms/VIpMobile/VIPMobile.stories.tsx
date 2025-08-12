import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import VIPMobile from './VIPMobile';

export default {
  title: 'Atoms/VIPMobile',
  component: VIPMobile,
} as Meta;

const Template: StoryFn = (args) => <VIPMobile {...args} />;

export const Default = Template.bind({});
Default.args = {};
