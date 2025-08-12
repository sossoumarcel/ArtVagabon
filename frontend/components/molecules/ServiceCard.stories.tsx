import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ServiceCard } from './ServiceCard';

// 1. Définir la configuration "meta"
const meta: Meta<typeof ServiceCard> = {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  argTypes: {
    iconName: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    buttonHref: { control: 'text' },
  },
};

// 2. L'export par défaut manquant
export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const MembershipVIP: Story = {
  args: {
    iconName: '👑',
    title: 'Membership VIP',
    description: 'Accédez à des contenus exclusifs, des avant-premières et des événements privés en devenant un membre VIP.',
    buttonLabel: 'Devenir Membre',
    buttonHref: '/vip',
  },
};

export const CandidatureFestival: Story = {
  args: {
    iconName: '🎨',
    title: 'Candidature Festival',
    description: 'Artistes, vous souhaitez exposer lors de notre prochain festival ? Soumettez votre candidature ici.',
    buttonLabel: 'Postuler Maintenant',
    buttonHref: '/candidature',
  },
};

export const ConseilExpertise: Story = {
  args: {
    iconName: '💡',
    title: 'Conseil & Expertise',
    description: 'Bénéficiez de notre expertise pour vos projets culturels, de la conception à la réalisation.',
    buttonLabel: 'Nous Contacter',
    buttonHref: '/contact',
  },
};