import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../components/ui/AuthLayout/AuthLayout'
import OTPBox from '../../../components/ui/OTPBox/OTPBox'
import AuthHeading from '../../../components/ui/AuthHeading/AuthHeading'
import Button from '../../../components/ui/Button/Button'
import './VerificationPhone.scss'

const VerificationPhone = () => {
  const navigate = useNavigate()
  const [resendTimer, setResendTimer] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const validationSchema = Yup.object({
    emailOtp: Yup.string().length(6, 'OTP must be 6 digits').required('Required'),
    phoneOtp: Yup.string().length(6, 'OTP must be 6 digits').required('Required')
  })

  return (
    <AuthLayout>
      <div className="verification-phone-screen">
        <button className="auth-back-link" onClick={() => navigate(-1)}>
          &lt; Back
        </button>

        <AuthHeading title="Verification Email" tone="gold" align="left" />

        <Formik
          initialValues={{ emailOtp: '', phoneOtp: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form className="auth-form">
            <div className="verification-section">
              <p className="verification-subtitle">
                Enter the Verification code we sent to *****in@gmail.com.
              </p>
              <div className="otp-label">OTP Code</div>
              <OTPBox name="emailOtp" length={6} />
              <div className="resend-timer">
                {resendTimer > 0 ? (
                  `Resend verification code in ${resendTimer}s`
                ) : (
                  <button type="button" className="resend-link">
                    Resend verification code
                  </button>
                )}
              </div>
            </div>

            <div className="verification-section">
              <h2 className="verification-title">Verification Phone Number</h2>
              <p className="verification-subtitle">
                Enter the Verification code we sent to +91 *******210.
              </p>
              <div className="otp-label">OTP Code</div>
              <OTPBox name="phoneOtp" length={6} />
              <div className="resend-timer">
                {resendTimer > 0 ? (
                  `Resend verification code in ${resendTimer}s`
                ) : (
                  <button type="button" className="resend-link">
                    Resend verification code
                  </button>
                )}
              </div>
            </div>

            <Button type="submit" variant="primary">
              Verify & Continue
            </Button>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default VerificationPhone
