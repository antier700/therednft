import { Col } from 'react-bootstrap'
import { ReactNode } from 'react'
import './CommonHeading.scss'

interface SplitTitle {
  first: string
  second: string
}

interface CommonHeadingProps {
  title: string | SplitTitle | ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
  variant?: 'default' | 'large'
}

const isSplitTitle = (title: string | SplitTitle | ReactNode): title is SplitTitle => {
  return typeof title === 'object' && title !== null && 'first' in title && 'second' in title && !('$$typeof' in title)
}

const CommonHeading = ({ title, subtitle, align = 'center', className = '', variant = 'default' }: CommonHeadingProps) => {
  return (
    <Col className={`common-heading-wrapper ${className}`}>
      <h2 className={`section-title ${variant} ${align === 'center' ? 'text-center' : ''}`}>
        {isSplitTitle(title) ? (
          <>
            <span className="title-first">{title.first}</span>{' '}
            <span className="title-second">{title.second}</span>
          </>
        ) : typeof title === 'string' ? (
          title
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </Col>
  )
}

export default CommonHeading
