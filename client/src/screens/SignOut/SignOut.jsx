import { useEffect } from "react";
import { signOut } from "../../services/users";
import { Redirect } from "react-router-dom";

function SignOut(props) {
  const { setUser } = props;

  useEffect(() => {
    const userSignOut = async () => {
      await signOut();
      setUser(null);
    };
    userSignOut();
  }, [setUser]);

  return <Redirect to="/" />;
}

export default SignOut;
