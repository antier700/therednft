import './ReactSelect.scss'

export interface ReactSelectOption {
  label: string
  value: string
}

interface ReactSelectProps {
  label?: string
  placeholder?: string
  value?: string
  options: ReactSelectOption[]
  onChange: (value: string) => void
  className?: string
  name?: string
}

const ReactSelect = ({ label, placeholder, value, options, onChange, className = '', name }: ReactSelectProps) => {
  return (
    <div className={`ui-select ${className}`}>
      {label ? <label className="ui-select-label">{label}</label> : null}
      <select
        className="ui-select-control"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        name={name}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ReactSelect

