import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../../components/index";
import { useData } from "../../Context/Context";
import { useAuth } from "../../Context/AuthProvider";

const Signin = () => {
  const { setToken, setUser } = useAuth();
  const { showtoast, dispatch } = useData();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [msg, setMsg] = useState("");
  const testCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  let navigate = useNavigate();
  const testCredentialsSigninHandler = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await axios.post("/api/auth/login", { ...testCredentials });
      if (status === 200) {
        localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: foundUser }));
        setUser(foundUser);
        console.log(foundUser);
        navigate("/videos");
      }
    } catch (error) {
      console.log("Error in login user", error);
    }
  };
  const signinHandler = async (e) => {
    e.preventDefault();
    const mailformat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = email.match(mailformat);
    if (isEmailValid && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await axios.post("/api/auth/login", { email, password });
        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
          console.log(foundUser);
          navigate("/videos");
        }
      } catch (error) {
        console.log("Error in login user", error);
        dispatch({ type: "SET_SHOW_TOAST", payload: !showtoast });
        setMsg("Please enter credentials");
      }
    } else {
      dispatch({ type: "SET_SHOW_TOAST", payload: !showtoast });
      setMsg("Please enter valid credentials");
    }
  };
  return (
    <>
      {showtoast === true && <Toast msg={msg} />}
      <div className="main-page">
        <form class="form-container">
          <h5 class="sub-heading">Signin</h5>
          <div class="form-group flex-vt">
            <label for="email-input" class="form-label form-field-required">
              Email
            </label>
            <input
              type="email"
              id="email-input"
              class="form-control"
              placeholder="abc@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group flex-vt">
            <label for="password-input" class="form-label form-field-required">
              Password
            </label>
            <input
              type="password"
              id="password-input"
              class="form-control"
              placeholder="enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h5 class="text forgot-pw-text">Forgot Password?</h5>
          <button class="btn btn-secondary" onClick={signinHandler}>
            Signin
          </button>
          <button
            class="btn btn-secondary"
            onClick={testCredentialsSigninHandler}
          >
            Signin with Test Credentials
          </button>
          <Link to="/signup" className="links text-link">
            Create new Account
          </Link>
        </form>
      </div>
    </>
  );
};
export { Signin };
