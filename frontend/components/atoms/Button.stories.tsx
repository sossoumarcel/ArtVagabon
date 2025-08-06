// frontend/components/atoms/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "./Button"

/**
 * Le `Button` est le moteur principal de l'interaction sur Arts Vagabonds.
 * Il existe en deux variantes principales.
 */
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    isDisabled: { control: "boolean" },
    onClick: { action: "clicked" }, // Permet de voir les clics dans le panneau "Actions"
  },
}

export default meta
type Story = StoryObj<typeof Button>

/**
 * ### Bouton Primaire
 * Le bouton doré, utilisé pour l'appel à l'action principal (CTA).
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Réserver votre visite",
  },
}

/**
 * ### Bouton Secondaire
 * Le bouton "fantôme", utilisé pour les actions secondaires.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Explorer la collection",
  },
}

/**
 * ### État Désactivé
 * Montre comment les boutons apparaissent lorsqu'ils ne sont pas cliquables.
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" label="Action Désactivée" isDisabled />
      <Button variant="secondary" label="Action Désactivée" isDisabled />
    </div>
  ),
}

/**
 * ### Test avec un Label Long
 * Pour vérifier que le padding s'adapte correctement à un texte long.
 */
export const LongLabel: Story = {
  args: {
    variant: "primary",
    label: "Découvrir les artistes de la nouvelle exposition",
  },
}
