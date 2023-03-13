import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Head from "./Head";
import { Logout } from "./Logout";

export const Register = (props) => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
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
      <form onSubmit={handleSubmit} className="signup-box">
        {/* <div className="name">
          <h4 htmlFor="name">Full Name:</h4>
          <input
            value={name}
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div> */}
        <div className="email">
          <h4 htmlFor="email">Email:</h4>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </div>
        <div className="pass">
          <h4 htmlFor="password">Password:</h4>
          <input
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Set password"
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <button
          onClick={() => props.onFormSwitch("login")}
          className="switch-signup"
        >
          Already have an account? Login here.
        </button>
        <Logout />
      </form>
    </>
  );
};
