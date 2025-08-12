// frontend/components/atoms/Paragraph.stories.tsx

import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Paragraph } from "./Paragraph"

/**
 * L'atome Paragraph est utilisé pour tous les textes courants du site.
 * La police par défaut est Saira Condensed.
 */
const meta: Meta<typeof Paragraph> = {
  title: "Atoms/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Paragraph>

/**
 * ### Taille Médium
 * C'est la taille par défaut pour le corps du texte.
 */
export const Medium: Story = {
  args: {
    size: "medium",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
}

/**
 * ### Taille Small
 * Utilisée pour les méta-données comme les dates ou les auteurs.
 */
export const Small: Story = {
  args: {
    size: "small",
    children: "Par John Doe - 25 Juillet 2025",
  },
}
