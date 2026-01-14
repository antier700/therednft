import './DatePicker.scss'

interface DatePickerProps {
  label?: string
  value?: string
  onChange: (value: string) => void
  className?: string
  name?: string
}

const DatePicker = ({ label, value, onChange, className = '', name }: DatePickerProps) => {
  return (
    <div className={`ui-date-picker ${className}`}>
      {label ? <label className="ui-date-picker-label">{label}</label> : null}
      <input
        className="ui-date-picker-control"
        type="date"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        name={name}
      />
    </div>
  )
}

export default DatePicker

