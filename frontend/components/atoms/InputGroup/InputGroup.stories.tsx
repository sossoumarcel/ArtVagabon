import React from 'react';
import { Story, Meta } from '@storybook/react';

import InputGroup from './InputGroup';
import { InputGroupProps } from './types';

export default {
  title: 'Atoms/InputGroup',
  component: InputGroup,
} as Meta;

const Template: Story<InputGroupProps> = (args) => <InputGroup {...args} />;

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
