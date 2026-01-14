import React from 'react'
import { Field, ErrorMessage, useField } from 'formik'
import './FormInput.scss'

interface FormInputProps {
  name: string
  label?: string
  type?: string
  placeholder?: string
  showPasswordToggle?: boolean
  countryCode?: boolean
  className?: string
}

const FormInput = ({ name, label, type = 'text', placeholder, showPasswordToggle = false, countryCode = false, className = '' }: FormInputProps) => {
  const [field, meta] = useField(name)
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className={`form-input-wrapper ${className}`}>
      {label && <label className="form-input-label">{label}</label>}
      <div className="form-input-container">
        {countryCode && (
          <div className="country-code-selector">
            <span className="country-flag">🇮🇳</span>
            <select className="country-code" defaultValue="+91">
              <option value="+91">+91</option>
            </select>
          </div>
        )}
        <Field
          {...field}
          type={showPasswordToggle && showPassword ? 'text' : type}
          placeholder={placeholder}
          className={`form-input ${countryCode ? 'has-country-code' : ''} ${meta.touched && meta.error ? 'error' : ''}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zM10 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zM10 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            )}
          </button>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="form-input-error" />
    </div>
  )
}

export default FormInput
