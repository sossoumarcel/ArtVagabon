// frontend/components/atoms/Button.tsx

interface ButtonProps {
  /**
   * Le style visuel du bouton
   */
  variant: "primary" | "secondary"
  /**
   * Le texte affiché dans le bouton
   */
  label: string
  /**
   * L'état désactivé du bouton
   */
  isDisabled?: boolean
  /**
   * La fonction à exécuter au clic
   */
  onClick?: () => void
}

export const Button = ({
  variant,
  label,
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "py-3 px-8 font-bold rounded-full transition-all duration-300 transform hover:scale-105"

  const variantClasses = {
    primary: "bg-[#FFC000] text-[#000000]",
    secondary: "border border-white text-white hover:bg-white hover:text-black",
  }

  const disabledClasses = isDisabled
    ? "opacity-50 cursor-not-allowed hover:scale-100"
    : ""

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses}`}
    >
      {label}
    </button>
  )
}
