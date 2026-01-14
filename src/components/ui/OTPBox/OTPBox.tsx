import React, { useRef, useEffect } from 'react'
import { useField } from 'formik'
import './OTPBox.scss'

interface OTPBoxProps {
  name: string
  length?: number
}

const OTPBox = ({ name, length = 6 }: OTPBoxProps) => {
  const [field, , helpers] = useField(name)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const currentValue = field.value || ''
    const newValue = currentValue.split('')
    newValue[index] = value
    const updatedValue = newValue.join('').slice(0, length)
    helpers.setValue(updatedValue)

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !field.value?.[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, length)
    helpers.setValue(pastedData)
    const lastIndex = Math.min(pastedData.length - 1, length - 1)
    inputRefs.current[lastIndex]?.focus()
  }

  return (
    <div className="otp-box-container">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={field.value?.[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="otp-input"
        />
      ))}
    </div>
  )
}

export default OTPBox
