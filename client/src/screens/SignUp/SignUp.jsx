import "./SignUp.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/users";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function SignUp(props) {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      if (password === passwordConfirmation) {
        const user = await signUp(form);
        setUser(user);
        history.push("/");
      }
    } catch (error) {
      console.log("Error", error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Invalid Sign Up Information",
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
    } else if (password !== passwordConfirmation) {
      return (
        <Button
          type="submit"
          className={toggleForm}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Please use matching passwords
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
          Sign Up
        </Button>
      );
    }
  };

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

  const { username, email, password, passwordConfirmation } = form;

  return (
    <Layout user={props.user}>
      <div className="formatContainer">
        <div className="outterFormSignUpContainer">
          <div className="formSignUpContainer">
            <h3>Sign Up</h3>
            <form onSubmit={onSignUp}>
              <div className="username">
                <label>Username</label>
                <input
                  required
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter username"
                  onChange={handleChange}
                />
              </div>
              <label>Email address</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange}
              />
              <label>Password</label>
              <input
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <label>Password Confirmation</label>
              <input
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {renderError()}
            </form>
          </div>
          <div className="catSignUp">
            <img
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/istockphoto-833450608-612x612-removebg-preview_ms3oez.png"
              alt="cat"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
