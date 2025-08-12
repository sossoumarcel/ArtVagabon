import React from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';

import InputGroup from './InputGroup';
import { InputGroupProps } from './types';

export default {
  title: 'Atoms/InputGroup',
  component: InputGroup,
} as Meta<typeof InputGroup>;

const Template: StoryFn<InputGroupProps> = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Rechercher...',
  buttonText: 'Go',
};

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  placeholder: 'Entrez votre email',
  buttonText: 'Souscrire',
};
