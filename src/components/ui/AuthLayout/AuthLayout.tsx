import React from 'react'
import './AuthLayout.scss'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="auth-layout">
      <div className="auth-background">
        <div className="auth-leaf-top-left"></div>
        <div className="auth-leaf-bottom-right"></div>
        <div className="auth-tech-pattern"></div>
      </div>
      <div className="auth-content">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
