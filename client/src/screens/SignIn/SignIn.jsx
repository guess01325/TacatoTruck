import './SignIn.css'
import { useState } from 'react'
import { signIn } from "../../services/users"
import { useHistory } from 'react-router-dom'
import Layout from "../../components/Layout/Layout";
import '@fontsource/roboto'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignIn(props) {
  

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  
    function Copyright(props) {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
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
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {renderError()}
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Layout>
      // <div className='signin-form'>
      //   <h1>Sign In</h1>
      //   <form onSubmit={onSignIn}>
      //     <label>Email</label>
      //     <input
      //       required
      //       type='text'
      //       name='email'
      //       value={email}
      //       placeholder='Enter Email'
      //       onChange={handleChange}
      //     />
      //     <label>Password</label>
      //     <input
      //       required
      //       name='password'
      //       value={password}
      //       onChange={handleChange}
      //     />
      //    
      // </form>
      //   </div>
      // 
    )
  }
}
