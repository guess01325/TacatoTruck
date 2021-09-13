import "./SignUp.css"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import {signUp} from "../../services/users"

function SignUp(props) {

  const history = useHistory()

  const [form, setForm] = useState({
    user
  })


  return (
    <>
      <h1>Hello from Sign up page</h1>
      </>
    
  )
}

export default SignUp