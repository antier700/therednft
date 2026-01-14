import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../components/ui/AuthLayout/AuthLayout'
import FormInput from '../../../components/ui/FormInput/FormInput'
import AuthHeading from '../../../components/ui/AuthHeading/AuthHeading'
import AuthTabs from '../../../components/ui/AuthTabs/AuthTabs'
import Button from '../../../components/ui/Button/Button'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  })

  return (
    <AuthLayout>
      <div className="login-screen">
        <AuthHeading
          title="Sign in"
          subtitle="Login by filling required Information."
          tone="white"
          align="center"
        />

        <AuthTabs
          leftLabel="Login"
          rightLabel="Register"
          active="left"
          onRightClick={() => navigate('/register')}
        />

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
            navigate('/')
          }}
        >
          <Form className="auth-form">
            <FormInput
              name="email"
              label="Email/phone/username"
              placeholder="Enter email/phone/username"
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              showPasswordToggle
            />
            <div className="auth-form-footer">
              <button
                type="button"
                className="auth-link"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </button>
            </div>
            <div className="auth-actions">
              <Button type="submit" variant="primary" className="auth-primary">
                Login
              </Button>
              <Button type="button" variant="icon" className="auth-google" ariaLabel="Google login">
                <span className="auth-google-icon">G</span>
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default Login
