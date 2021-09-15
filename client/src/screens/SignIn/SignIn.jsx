import "./SignIn.css";
import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
<<<<<<< HEAD
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


=======
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

function SignIn(props) {
  const history = useHistory();
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const { email, password } = form;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
<<<<<<< HEAD
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
=======
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.log("Error", error);
      setForm({
        email: "",
        password: "",
        isError: true,
        errorMsg: "Invalid Sign In Information",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <Button
          type="submit"
          className={toggleForm}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      );
    }
  };
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

<<<<<<< HEAD
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
=======
  return (
    // <Layout user={props.user}>
    //   <div className="signin-form">
    //     <h1>Sign In</h1>
    //     <form onSubmit={onSignIn}>
    //       <label>Email</label>
    //       <input
    //         required
    //         type="text"
    //         name="email"
    //         value={email}
    //         placeholder="Enter Email"
    //         onChange={handleChange}
    //       />
    //       <label>Password</label>
    //       <input
    //         required
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //       {renderError()}
    //     </form>
    //   </div>
    // </Layout>
    <Layout user={props.user}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={onSignIn} sx={{ mt: 1 }}>
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
<<<<<<< HEAD
=======
                value={email}
                onChange={handleChange}
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
<<<<<<< HEAD
=======
                value={password}
                onChange={handleChange}
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f
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
<<<<<<< HEAD
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
=======
              {renderError()}
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f
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
<<<<<<< HEAD
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
=======
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default SignIn;
>>>>>>> b2a6c73b7716d25fc991fc85999a328c7586156f
