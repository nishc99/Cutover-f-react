import React, { useState, useContext } from "react";
import styles from "../styles/SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./UserContext"; // Update the path accordingly

const SignIn = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = async (userData) => {
    window.alert("Login successful!");
    console.log(userData);

    dispatch({ type: "LOGIN", payload: userData });

   
    localStorage.setItem("user", JSON.stringify(userData));

    navigate(`/dashboard`);
  };

  const handleLoginFailure = () => {
    window.alert("Login failed. Please check your username and password.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        handleLoginSuccess(userData);
      } else {
        handleLoginFailure();
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
      <div className={styles.container}>
        <div className={styles.SignInContainer}>
          <div className={styles.SignInForm}>
            <h1 className={styles.heading}>Sign In</h1>
            <p>Please enter your Company network credentials</p>
  
            <form className={styles.SignInForm1} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Sign In</button>
  
              <p className={styles.signUpLink}>
                Don't have an account? <Link to="/SignUp">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default SignIn;
