// frontend/components/atoms/Paragraph.tsx

import React from "react"

interface ParagraphProps {
  /**
   * Définit la taille de la police pour le paragraphe.
   */
  size?: "medium" | "small"
  /**
   * Le contenu textuel à afficher.
   */
  children: React.ReactNode
}

export const Paragraph = ({ size = "medium", children }: ParagraphProps) => {
  const sizeClasses = {
    medium: "text-base", // text-base est la taille standard de Tailwind
    small: "text-sm", // text-sm est plus petit
  }

  return <p className={sizeClasses[size]}>{children}</p>
}
