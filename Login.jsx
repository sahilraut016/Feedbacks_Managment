import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:9091/user/login", {
      mail: email,
      pass: password,
    });

    if (res.data == null || res.data === "") {
      alert("Invalid Email or Password");
    } else {
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("userName", res.data.name);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/feedback");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        New user? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;