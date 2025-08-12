
import type { Meta, StoryObj } from '@storybook/react';
import { ExhibitionPreview, ExhibitionPreviewProps } from './ExhibitionPreview';

// Définition des métadonnées du composant pour Storybook
const meta: Meta<typeof ExhibitionPreview> = {
  title: 'Components/ExhibitionPreview',
  component: ExhibitionPreview,
  tags: ['autodocs'], // Active la documentation automatique
  argTypes: {
    title: { control: 'text', description: 'Titre de l\'exposition' },
    imageUrl: { control: 'text', description: 'URL de l\'image de couverture' },
    status: {
      control: 'select',
      options: ['current', 'upcoming', 'past'],
      description: 'Statut de l\'exposition',
    },
    description: { control: 'text', description: 'Courte description' },
    artists: { control: 'object', description: 'Liste des artistes' },
    location: { control: 'text', description: 'Lieu de l\'exposition' },
    dates: { control: 'text', description: 'Dates de l\'événement' },
    shareUrl: { control: 'text', description: 'URL de partage' },
    isSpotlight: { control: 'boolean', description: 'Mise en avant' },
    isVirtual: { control: 'boolean', description: 'Exposition virtuelle' },
    launchDate: { control: 'text', description: 'Date de lancement (pour \'upcoming\')' },
    onClick: { action: 'clicked', description: 'Callback au clic sur la carte' },
    onNotifyMe: { action: 'notifyMe', description: 'Callback pour l\'inscription' },
  },
};

export default meta;
type Story = StoryObj<typeof ExhibitionPreview>;

// Arguments de base pour toutes les stories
const baseArgs: ExhibitionPreviewProps = {
  title: 'Explorations Chromatiques',
  imageUrl: 'https://picsum.photos/seed/art1/600/400', // Image de substitution
  description: 'Une plongée dans l\'univers des couleurs et des formes, où chaque œuvre raconte une histoire unique.',
  artists: ['Eva Lux', 'Marcello Vega'],
  location: 'Galerie Principale',
  dates: '15 Sept - 30 Oct 2025',
  shareUrl: 'https://artvagabon.fr/expos/explorations-chromatiques',
  onClick: () => alert('Navigation vers les détails de l\'exposition !'),
};

// Story pour une exposition en cours
export const CurrentExhibition: Story = {
  args: {
    ...baseArgs,
    status: 'current',
  },
};

// Story pour une exposition à venir
export const UpcomingExhibition: Story = {
  args: {
    ...baseArgs,
    title: 'Futurs Rêvés',
    status: 'upcoming',
    dates: 'À partir du 1er Déc 2025',
    launchDate: '01/12/2025',
    imageUrl: 'https://picsum.photos/seed/art2/600/400',
  },
};

// Story pour une exposition passée
export const PastExhibition: Story = {
  args: {
    ...baseArgs,
    title: 'Mémoires de Pierre',
    status: 'past',
    dates: '10 Jan - 28 Fév 2025',
    imageUrl: 'https://picsum.photos/seed/art3/600/400',
  },
};

// Story pour une exposition mise en avant (spotlight)
export const SpotlightExhibition: Story = {
  args: {
    ...baseArgs,
    status: 'current',
    isSpotlight: true,
    description: 'L\'exposition phare du moment, à ne manquer sous aucun prétexte. Une expérience immersive garantie.',
    imageUrl: 'https://picsum.photos/seed/art4/600/400',
  },
};

// Story pour une exposition virtuelle
export const VirtualExhibition: Story = {
  args: {
    ...baseArgs,
    status: 'current',
    isVirtual: true,
    location: 'En ligne',
    imageUrl: 'https://picsum.photos/seed/art5/600/400',
  },
};

