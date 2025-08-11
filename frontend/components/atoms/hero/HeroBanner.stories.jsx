import React from 'react';
import HeroBanner from './HeroBanner';

export default {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
    buttonText: { control: 'text' },
    buttonLink: { control: 'text' },
  },
};

const Template = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Bienvenue sur ArtVagabon',
  subtitle: 'L’art du Bénin, un voyage au cœur de l’âme africaine.',
  backgroundImage: '/images/hero.png', 
  buttonText: 'Découvrir',
  buttonLink: '#explorer',
};
