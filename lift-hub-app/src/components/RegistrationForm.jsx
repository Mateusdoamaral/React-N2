import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'aluno', // 'aluno' ou 'personal'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Nome é obrigatório.";
    if (!formData.email) {
      tempErrors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email inválido.";
    }
    if (!formData.password) {
      tempErrors.password = "Senha é obrigatória.";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Senha deve ter no mínimo 6 caracteres.";
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "As senhas não coincidem.";
    }
    if (!formData.role) tempErrors.role = "Selecione um tipo de conta.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados do Formulário:", formData);
      // Aqui você enviaria os dados para um backend
      setSubmitted(true);
      // Resetar formulário (opcional)
      // setFormData({ name: '', email: '', password: '', confirmPassword: '', role: 'aluno' });
    } else {
      setSubmitted(false);
    }
  };

  if (submitted) {
    return (
      <div className="submission-success">
        <h3>Cadastro realizado com sucesso!</h3>
        <p>Bem-vindo(a) ao Lift Hub, {formData.name}!</p>
        <p>Um email de confirmação foi enviado para {formData.email}. (Simulação)</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form" noValidate>
      <div className="form-group">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="role">Eu sou:</label>
        <select id="role" name="role" value={formData.role} onChange={handleChange}>
          <option value="aluno">Aluno (buscando treino/dieta)</option>
          <option value="personal">Personal Trainer (oferecendo serviços)</option>
        </select>
        {errors.role && <p className="error-message">{errors.role}</p>}
      </div>

      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  );
}

export default RegistrationForm;