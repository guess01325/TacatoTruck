import "./SignIn.css";
import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Box";


function SignIn(props) {
  const history = useHistory();

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
          color="secondary"
        >
          Sign In
        </Button>
      );
    }
  };

  return (
    <Layout user={props.user}>
      <Container>
        <div className="outterContainer">
          <div className="formSignInContainer">
            <h1 className="signInLabel">Sign In</h1>
            <form onSubmit={onSignIn}>
              <div className="signInEmail">
                <label>Email</label>
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div className="signInPw">
                <label>Password</label>
                <input
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              {renderError()}
            </form>
          </div>
            <img
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/istockphoto-833450608-612x612-removebg-preview_ms3oez.png"
              alt="cat"
            />
        </div>
      </Container>
    </Layout>
  );
}

export default SignIn;
