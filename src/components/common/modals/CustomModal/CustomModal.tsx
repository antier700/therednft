import { Modal } from 'react-bootstrap'
import Button from '../../../ui/Button/Button'
import './CustomModal.scss'

interface CustomModalProps {
  show: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'lg' | 'xl'
}

const CustomModal = ({ show, title, onClose, children, footer, size }: CustomModalProps) => {
  return (
    <Modal show={show} onHide={onClose} centered size={size} contentClassName="custom-modal">
      {title ? (
        <Modal.Header className="custom-modal-header">
          <Modal.Title className="custom-modal-title">{title}</Modal.Title>
          <button type="button" className="custom-modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </Modal.Header>
      ) : null}
      <Modal.Body className="custom-modal-body">{children}</Modal.Body>
      {footer ? (
        <Modal.Footer className="custom-modal-footer">{footer}</Modal.Footer>
      ) : (
        <Modal.Footer className="custom-modal-footer">
          <Button type="button" variant="icon" onClick={onClose} ariaLabel="Close">
            ×
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  )
}

export default CustomModal

