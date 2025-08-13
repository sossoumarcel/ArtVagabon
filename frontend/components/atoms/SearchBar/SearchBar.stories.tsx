import React from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import SearchBar from './SearchBar';
import { SearchBarProps } from './types';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
} as Meta<SearchBarProps>;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Rechercher...',
  onSearch: (query) => {
    console.log('Search query:', query);
  },
};
