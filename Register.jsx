import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9091/user/register", {
        name,
        mail,
        pass,
      });

      if (res.data == null) {
        alert("Email Already Exists");
      } else {
        alert("Registration Successful");
        navigate("/");
      }
    } catch (error) {
      alert("Server Error");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Register Page</h2>

      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Register;