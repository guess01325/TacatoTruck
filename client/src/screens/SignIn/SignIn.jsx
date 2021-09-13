import './SignIn.css'
import { useState } from 'react'
import { signIn } from "../../services/users"
import { useHistory } from 'react-router-dom'
import Layout from "../../components/Layout/Layout";

function SignIn(props) {

  const history = useHistory()



  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

    const {email, password} = form

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

const onSignIn = async (event) => {
    event.preventDefault()
  const { setUser } = props
  try {
    const user = await signIn(form)
    setUser(user)
    history.push('/')
  } catch (error) {
    console.log("Error", error)
    setForm({
      email: '',
      password: '',
      isError: true,
      errorMsg: 'Invalid Sign In Information'

    })
  }

    
}
  
  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign In</button>
    }
  }


  return (
    <Layout user={props.user}>
    <div className='signin-form'>
      <h1>Sign In</h1>
      <form onSubmit={onSignIn}>
        <label>Email</label>
        <input
          required
          type='text'
          name='email'
          value={email}
          placeholder='Enter Email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          onChange={handleChange}
        />
        {renderError()}
    </form>
      </div>
      </Layout>
  )
}

export default SignIn