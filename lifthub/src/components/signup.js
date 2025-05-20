import React, { useState } from 'react';
import '../App.css';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', objetivo: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Aqui você pode enviar os dados para um backend, se desejar
  };

  return (
    <div style={{ padding: "100px 20px 0 20px" }}>
      <h2>Cadastro de Interesse</h2>
      {submitted ? (
        <p style={{ color: "#fff" }}>Obrigado por se cadastrar, {form.name}!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
          <label>Nome:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: "100%", marginBottom: 8 }} />
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: "100%", marginBottom: 8 }} />
          <label>Objetivo:</label>
          <textarea name="objetivo" value={form.objetivo} onChange={handleChange} rows={3} style={{ width: "100%" }} />
          <button type="submit" style={{ marginTop: 8 }}>Enviar</button>
        </form>
      )}
    </div>
  );
}

export default Signup;