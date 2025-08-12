import React from 'react';
import { Story, Meta } from '@storybook/react';
import EmptyState from './EmptyState';
import { EmptyStateProps } from './types';

export default {
  title: 'Atoms/EmptyState',
  component: EmptyState,
} as Meta;

const Template: Story<EmptyStateProps> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Aucune donnée disponible.',
};