import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../components/ui/AuthLayout/AuthLayout'
import FormInput from '../../../components/ui/FormInput/FormInput'
import AuthHeading from '../../../components/ui/AuthHeading/AuthHeading'
import Button from '../../../components/ui/Button/Button'
import './ResetPassword.scss'

const ResetPassword = () => {
  const navigate = useNavigate()

  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 1
    if (password.length >= 12) strength += 1
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1
    if (/\d/.test(password)) strength += 1
    if (/[^a-zA-Z\d]/.test(password)) strength += 1
    return Math.min(strength, 3)
  }

  const getStrengthLabel = (strength: number) => {
    if (strength === 0) return ''
    if (strength === 1) return 'Weak'
    if (strength === 2) return 'Medium'
    return 'Strong'
  }

  const validationSchema = Yup.object({
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
      .required('Required')
  })

  return (
    <AuthLayout>
      <div className="reset-password-screen">
        <button className="auth-back-link" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
        <AuthHeading
          title="Reset Password"
          subtitle="Please choose a new password."
          tone="gold"
          align="left"
        />

        <Formik
          initialValues={{ newPassword: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ values }) => {
            const currentStrength = calculatePasswordStrength(values.newPassword || '')

            return (
              <Form className="auth-form">
                <div className="form-input-wrapper">
                  <FormInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                    showPasswordToggle
                  />
                  {values.newPassword && (
                    <div className="password-strength-indicator">
                      <div className="password-strength-bar">
                        <div
                          className={`password-strength-fill strength-${currentStrength}`}
                          style={{ width: `${((currentStrength + 1) / 4) * 100}%` }}
                        ></div>
                      </div>
                      {currentStrength > 0 && (
                        <span className={`password-strength-label strength-${currentStrength}`}>
                          {getStrengthLabel(currentStrength)}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <FormInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter confirm password"
                  showPasswordToggle
                />
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default ResetPassword
