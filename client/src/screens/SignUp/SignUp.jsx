import "./SignUp.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout";

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
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password, passwordConfirmation } = form;

  return (
    <Layout user={props.user}>
      <div className="signup-form">
        <h1> Sign Up</h1>
        <form onSubmit={onSignUp}>
          <label>Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter username here"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="Enter email here"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            type="text"
            name="password"
            value={password}
            placeholder="Enter password here"
            onChange={handleChange}
          />
          <label>Password Confirmation</label>
          <input
            required
            type="text"
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Confirm password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
}

export default SignUp;
