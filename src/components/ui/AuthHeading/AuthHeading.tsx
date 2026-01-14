import './AuthHeading.scss'

type AuthHeadingTone = 'white' | 'gold'
type AuthHeadingAlign = 'center' | 'left'

interface AuthHeadingProps {
  title: string
  subtitle?: string
  tone?: AuthHeadingTone
  align?: AuthHeadingAlign
}

const AuthHeading = ({ title, subtitle, tone = 'white', align = 'center' }: AuthHeadingProps) => {
  return (
    <div className={`auth-heading auth-heading-${tone} auth-heading-${align}`}>
      <h1 className="auth-heading-title">{title}</h1>
      {subtitle ? <p className="auth-heading-subtitle">{subtitle}</p> : null}
    </div>
  )
}

export default AuthHeading

