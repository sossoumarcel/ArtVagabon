import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExhibitionsSection from './ExhibitionsSection';

const meta: Meta<typeof ExhibitionsSection> = {
  title: 'Organisms/ExhibitionsSection',
  component: ExhibitionsSection,
};
export default meta;
type Story = StoryObj<typeof ExhibitionsSection>;

const sampleExhibitions = [
  {
    imageUrl: 'https://picsum.photos/400/300?random=1',
    title: 'Lumières du Nord',
    date: '15 Octobre 2025',
    description: 'Une immersion dans les aurores boréales et la culture nordique.',
    href: '#'
  },
  {
    imageUrl: 'https://picsum.photos/400/300?random=2',
    title: 'Secrets de la Mer',
    date: '2 Novembre 2025',
    description: 'Exploration des mystères océaniques à travers l’art.',
    href: '#'
  },
  {
    imageUrl: 'https://picsum.photos/400/300?random=3',
    title: 'Couleurs Urbaines',
    date: '20 Décembre 2025',
    description: 'Street art et paysages urbains revisités.',
    href: '#'
  }
];

export const Default: Story = {
  args: {
    title: 'Expositions à Venir',
    exhibitions: sampleExhibitions
  }
};

export const LoadingState: Story = {
  args: {
    title: 'Expositions à Venir',
    loading: true
  }
};

export const EmptyState: Story = {
  args: {
    title: 'Expositions à Venir',
    exhibitions: []
  }
};
