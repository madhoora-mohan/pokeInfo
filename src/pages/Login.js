import Head from "./Head";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Logout } from "./Logout";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Head />
      <form onSubmit={handleSubmit} className="login-box">
        <div className="email">
          <h4 htmlFor="email">Email:</h4>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className="pass">
          <h4 htmlFor="password">Password:</h4>
          <input
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>
        <button
          type="submit"
          onClick={() => props.logFormSwitch("loggedin")}
          className="login-btn"
        >
          Login
        </button>
        <button
          onClick={() => props.onFormSwitch("register")}
          className="switch-signup"
        >
          Don't have an account? Sign Up here.
        </button>
        <Logout />
      </form>
    </>
  );
};
