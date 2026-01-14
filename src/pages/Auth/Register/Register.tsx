import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../components/ui/AuthLayout/AuthLayout'
import FormInput from '../../../components/ui/FormInput/FormInput'
import AuthHeading from '../../../components/ui/AuthHeading/AuthHeading'
import AuthTabs from '../../../components/ui/AuthTabs/AuthTabs'
import Button from '../../../components/ui/Button/Button'
import './Register.scss'

const Register = () => {
  const navigate = useNavigate()

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    referralCode: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    username: Yup.string(),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    referralCode: Yup.string(),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required')
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <AuthLayout>
      <div className="register-screen">
        <button className="auth-back-link" onClick={() => navigate(-1)}>
          &lt; Back
        </button> 

        <AuthHeading
          title="Register"
          subtitle="Choose one of available Social Platform or create a new account."
          tone="white"
          align="center"
        />

        <AuthTabs
          leftLabel="Login"
          rightLabel="Register"
          active="right"
          onLeftClick={() => navigate('/login')}
        />

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="auth-form">
            <div className="auth-form-row">
              <FormInput
                name="firstName"
                label="First Name*"
                placeholder="Enter First Name"
                className="auth-form-col"
              />
              <FormInput
                name="lastName"
                label="Last Name*"
                placeholder="Enter Last Name"
                className="auth-form-col"
              />
            </div>
            <div className="auth-form-row">
            <FormInput
              name="username"
              label="Username"
              placeholder="Enter Username"
            />
              <FormInput
                name="email"
                label="Email ID*"
                placeholder="Enter email"
                type="email"
                className="auth-form-col"
              />
              <FormInput
                name="referralCode"
                label="Referral Code (If Any)"
                placeholder="Enter referral code"
                className="auth-form-col"
              />
            <FormInput
              name="phoneNumber"
              label="Phone Number*"
              placeholder="Phone Number"
              countryCode
            />
            </div>
            <div className="auth-form-row">
              <FormInput
                name="password"
                label="Password"
                type="password"
                placeholder="Enter password"
                showPasswordToggle
                className="auth-form-col"
              />
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Enter password"
                showPasswordToggle
                className="auth-form-col"
              />
            </div>
            <div className="auth-actions mt-5">
              <Button type="submit" variant="primary" className="auth-primary">
                Register Now
              </Button>
              <Button type="button" variant="icon" className="auth-google" ariaLabel="Google signup">
                <span className="auth-google-icon">G</span>
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default Register
