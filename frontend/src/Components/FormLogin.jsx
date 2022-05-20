import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabeledInput from './Input';
import services from '../services/fetch';
import { FormStyled } from '../styles';

function FormLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleForms = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await services.loginUser(form);
    if (response.error === undefined) {
      localStorage.setItem('to-do', JSON.stringify(response));
      navigate('/home');
    }
  };

  return (
    <FormStyled>
      <LabeledInput
        type="text"
        name="email"
        label="Email"
        value={form.email}
        handle={handleForms}
      />
      <LabeledInput
        type="password"
        name="password"
        label="Senha"
        value={form.password}
        handle={handleForms}
      />
      <button
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>
    </FormStyled>
  );
}

export default FormLogin;
