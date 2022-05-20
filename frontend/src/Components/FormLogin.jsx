import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabeledInput from './Input';
import services from '../services/fetch';

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
    console.log(response);
    if (response.error === undefined) {
      localStorage.setItem('to-do', JSON.stringify(response));
      navigate('/home');
    }
  };

  return (
    <form>
      <LabeledInput
        type="text"
        name="email"
        value={form.email}
        handle={handleForms}
      />
      <LabeledInput
        type="password"
        name="password"
        value={form.password}
        handle={handleForms}
      />
      <button
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>
    </form>
  );
}

export default FormLogin;
