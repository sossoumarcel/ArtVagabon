import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ServiceCard, { ServiceCardProps } from './ServiceCard';

export default {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  argTypes: {
    iconName: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    buttonHref: { control: 'text' },
  }
} as Meta;

const Template: StoryFn<ServiceCardProps> = (args) => <div style={{ maxWidth: '350px', margin: 'auto' }}><ServiceCard {...args} /></div>;

export const MembershipVIP = Template.bind({});
MembershipVIP.args = {
  iconName: '⭐',
  title: 'Membership VIP',
  description: 'Accédez à des contenus exclusifs, des événements privés et des avantages uniques.',
  buttonLabel: 'Devenir VIP',
  buttonHref: '/vip',
};

export const CandidatureFestival = Template.bind({});
CandidatureFestival.args = {
  iconName: '📄',
  title: 'Candidature Festival',
  description: 'Soumettez votre projet pour notre prochain festival et faites partie de l\'aventure.',
  buttonLabel: 'Postuler maintenant',
  buttonHref: '/candidature',
};

export const ConseilExpertise = Template.bind({});
ConseilExpertise.args = {
  iconName: '💼',
  title: 'Conseil & Expertise',
  description: 'Bénéficiez de notre expertise pour développer et promouvoir vos projets artistiques.',
  buttonLabel: 'En savoir plus',
  buttonHref: '/conseil',
};
