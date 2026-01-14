import './Toast.scss'

type ToastVariant = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  variant?: ToastVariant
  onClose?: () => void
  className?: string
}

const Toast = ({ message, variant = 'info', onClose, className = '' }: ToastProps) => {
  return (
    <div className={`ui-toast ui-toast-${variant} ${className}`} role="status" aria-live="polite">
      <div className="ui-toast-message">{message}</div>
      {onClose ? (
        <button type="button" className="ui-toast-close" onClick={onClose} aria-label="Close toast">
          ×
        </button>
      ) : null}
    </div>
  )
}

export default Toast

