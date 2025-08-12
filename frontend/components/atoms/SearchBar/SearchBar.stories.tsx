import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import SearchBar from './SearchBar';
import { SearchBarProps } from './types';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Rechercher...',
  onSearch: (query) => {
    console.log('Search query:', query);
  },
};
