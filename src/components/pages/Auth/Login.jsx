import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "src/context/AuthContext";

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState(null)
  const [message, setMessage] = useState("")

  const {signUp} = useAuth()
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = await signUp({ email, password });

    if (error) {
      setError(error);
      setMessage("error with email or password");
      return;
    }
    navigate("/");
  }
  return (
    <div className="text-center div">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          ref={emailRef}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <Link to="/signup">
          <a>Sign up</a>
        </Link>
      </form>
      {message ? <p>{message}</p> : ""}
    </div>
  );
}