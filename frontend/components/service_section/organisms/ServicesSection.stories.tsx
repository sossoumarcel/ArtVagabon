import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ServicesSection, { ServicesSectionProps } from './ServicesSection';

export default {
  title: 'Organisms/ServicesSection',
  component: ServicesSection,
} as Meta;

const servicesData = [
  {
    iconName: '⭐',
    title: 'Membership VIP',
    description: 'Accédez à des contenus exclusifs, des événements privés et des avantages uniques.',
    buttonLabel: 'Devenir VIP',
    buttonHref: '/vip',
  },
  {
    iconName: '📄',
    title: 'Candidature Festival',
    description: 'Soumettez votre projet pour notre prochain festival et faites partie de l\'aventure.',
    buttonLabel: 'Postuler maintenant',
    buttonHref: '/candidature',
  },
  {
    iconName: '💼',
    title: 'Conseil & Expertise',
    description: 'Bénéficiez de notre expertise pour développer et promouvoir vos projets artistiques.',
    buttonLabel: 'En savoir plus',
    buttonHref: '/conseil',
  },
];

const Template: StoryFn<ServicesSectionProps> = (args) => <ServicesSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Nos Services',
  services: servicesData,
};

export const WithOneCard = Template.bind({});
WithOneCard.args = {
  title: 'Notre Service',
  services: [servicesData[0]],
};
