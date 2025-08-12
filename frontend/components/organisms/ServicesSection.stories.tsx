import type { Meta, StoryObj } from '@storybook/react-vite';
import { ServicesSection } from './ServicesSection';
import { MembershipVIP, CandidatureFestival, ConseilExpertise } from '../molecules/ServiceCard.stories';
import type { ServiceCardProps } from '../molecules/ServiceCard';

const meta: Meta<typeof ServicesSection> = {
  title: 'Organisms/ServicesSection',
  component: ServicesSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {
  args: {
    title: 'La Vitrine de notre Savoir-Faire',
   services: [
      { ...(MembershipVIP.args as ServiceCardProps) },
      { ...(CandidatureFestival.args as ServiceCardProps) },
      { ...(ConseilExpertise.args as ServiceCardProps) },
    ],
  },
  parameters: {
    // Documentation pour valider le responsive avec l'addon Viewport
    docs: {
      description: {
        story: 'Cette story affiche la section complète avec trois services. Utilisez l\'addon Viewport pour tester le comportement responsive et vérifier que les cartes s\'empilent sur les écrans mobiles.'
      }
    }
  }
};

// Story "Avec une seule carte" (Optionnel)
export const AvecUneSeuleCarte: Story = {
  args: {
    title: 'Notre Service Phare',
    services: [
      { ...(CandidatureFestival.args as ServiceCardProps) },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Cette story teste le comportement de la grille avec un seul élément. La carte doit rester dans la grille et s\'adapter à l\'espace disponible.'
      }
    }
  }
};