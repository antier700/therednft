import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../components/ui/AuthLayout/AuthLayout'
import FormInput from '../../../components/ui/FormInput/FormInput'
import AuthHeading from '../../../components/ui/AuthHeading/AuthHeading'
import Button from '../../../components/ui/Button/Button'
import './ForgotPassword.scss'

const ForgotPassword = () => {
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required')
  })

  return (
    <AuthLayout>
      <div className="forgot-password-screen">
        <button className="auth-back-link" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
        <AuthHeading
          title="Forgot Password"
          subtitle="Choose one of available Social Platform or Login by filling required Information."
          tone="gold"
          align="left"
        />

        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
            navigate('/verification-email')
          }}
        >
          <Form className="auth-form">
            <FormInput
              name="email"
              label="Email ID"
              placeholder="Enter email"
              type="email"
            />
            <Button type="submit" variant="primary">
              Continue
            </Button>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default ForgotPassword
