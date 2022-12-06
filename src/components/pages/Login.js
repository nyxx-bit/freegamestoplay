import React from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../img/logo.png";
import "./login.css";
import swal from "sweetalert";

async function loginUser(credentials) {
  console.log(credentials);
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      email,
      password,
    });

    console.log(response);

    if ("token" in response) {
      swal("Success", "Login success, welcome!", "success", {
        buttons: false,
        timer: 2000,
      }).then(() => {
        localStorage.setItem("authenticated", response["token"]);
        window.location.href = "/home";
      });
    } else {
      let str = response.error.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      let strError = str.join(" ");

      swal("Failed", strError, "error");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left-wrapper">
          <img src={logo} alt="" />
          <h5>Free-to-Play Games</h5>
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-wrapper">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label>Email Address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder=""
              />
            </div>

            <div className="password">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="pswd"
                placeholder=""
                autoComplete="on"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
