import './Tooltip.scss'

interface TooltipProps {
  content: string
  children: React.ReactNode
  className?: string
}

const Tooltip = ({ content, children, className = '' }: TooltipProps) => {
  return (
    <span className={`ui-tooltip ${className}`}>
      {children}
      <span className="ui-tooltip-bubble" role="tooltip">
        {content}
      </span>
    </span>
  )
}

export default Tooltip

