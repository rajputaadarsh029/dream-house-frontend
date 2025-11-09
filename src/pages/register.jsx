// src/pages/Register.jsx
import React, { useState } from "react";
import api, { API_BASE } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const res = await api.post(`${API_BASE}/signup`, {
        username,
        password,
      });

      if (res.data.success) {
        alert("Account created!");
        navigate("/login");
      }
    } catch (err) {
      alert("Registration failed");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
