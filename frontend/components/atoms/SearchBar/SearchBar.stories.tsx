import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchBar from './SearchBar';
import { SearchBarProps } from './types';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Rechercher...',
  onSearch: (query) => {
    console.log('Search query:', query);
  },
};