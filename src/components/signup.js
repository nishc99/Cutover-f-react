import React, { useState, useContext } from "react";
import styles from "../styles/SignUp.module.css";
import { Link, useNavigate } from "react-router-dom"; 
import { Context } from "../components/UserContext"; 

const SignUp = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:1337/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const userData = await response.json();
        
  
        dispatch({ type: "LOGIN", payload: userData });
  
       
        localStorage.setItem("user", JSON.stringify(userData));
  
        alert("Successfully Signup!!!");
  
        navigate("/dashboard");
      } else {
        console.error("Registration failed");
        alert("SignUp Failed!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpForm}>
          <h1 className={styles.heading}>Sign Up</h1>
          <p className={styles.signup_p}>Please create your account</p>

          <form className={styles.SignUpForm1} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input className={styles.signupinput} 
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input className={styles.signupinput}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input className={styles.signupinput}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              
            </div>
            
            <button type="submit" className={styles.Signup_button}>
              Sign Up
            </button>

            <p className={styles.signinLink}>
              Already have an account? <Link to="/">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
