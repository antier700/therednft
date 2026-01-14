import './Button.scss'

type ButtonVariant = 'primary' | 'icon'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

const Button = ({
  type = 'button',
  variant = 'primary',
  children,
  onClick,
  className = '',
  ariaLabel
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`ui-button ui-button-${variant} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default Button

