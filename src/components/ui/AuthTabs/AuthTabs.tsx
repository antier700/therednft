import './AuthTabs.scss'

interface AuthTabsProps {
  leftLabel: string
  rightLabel: string
  active: 'left' | 'right'
  onLeftClick?: () => void
  onRightClick?: () => void
}

const AuthTabs = ({ leftLabel, rightLabel, active, onLeftClick, onRightClick }: AuthTabsProps) => {
  return (
    <div className="auth-tabs" data-active={active}>
      <button
        type="button"
        className={`auth-tab ${active === 'left' ? 'active' : ''}`}
        onClick={onLeftClick}
      >
        {leftLabel}
      </button>
      <button
        type="button"
        className={`auth-tab ${active === 'right' ? 'active' : ''}`}
        onClick={onRightClick}
      >
        {rightLabel}
      </button>
      <div className="auth-tabs-underline" />
      <div className="auth-tabs-active-indicator" />
    </div>
  )
}

export default AuthTabs

