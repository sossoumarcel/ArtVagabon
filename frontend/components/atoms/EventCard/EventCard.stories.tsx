import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import EventCard, { EventCardProps } from "./EventCard";

const meta: Meta<typeof EventCard> = {
  title: "Molecules/EventCard",
  component: EventCard,
  parameters: {
    // Pas d'addon viewport ici. Pour vérifier mobile/desktop, redimensionne manuellement.
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EventCard>;

const baseArgs: EventCardProps = {
  imageUrl: "https://picsum.photos/800/500?random=1",
  title: "Exposition : Couleurs et Contrastes",
  date: "12 Septembre 2025",
  description:
    "Une exposition qui explore les relations entre textures, couleurs et émotions. Œuvres sélectionnées par curateurs locaux.",
  href: "#",
};

export const Standard: Story = {
  args: {
    ...baseArgs,
  },
  parameters: {
    // Note pour testeur : redimensionner la fenêtre pour valider la responsivité
  },
};

export const LongTitle: Story = {
  args: {
    ...baseArgs,
    title:
      "Titre très long : Exploration panoramique des tonalités, contrastes chromatiques et jeux d'ombre qui redéfinissent la perception visuelle contemporaine",
  },
};

export const WithoutDescription: Story = {
  args: {
    ...baseArgs,
    description: "",
  },
};
