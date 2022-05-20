import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabeledInput from './Input';
import services from '../services/fetch';

function FormRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleForms = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await services.register(form);
    if (response.error === undefined) {
      localStorage.setItem('to-do', JSON.stringify(response));
      navigate('/home');
    }
  };

  return (
    <form>
      <LabeledInput
        type="text"
        name="userName"
        value={form.userName}
        handle={handleForms}
      />
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
      <LabeledInput
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        handle={handleForms}
      />
      <button
        type="submit"
        onClick={handleRegister}
      >
        Cadastrar
      </button>
    </form>
  );
}

export default FormRegister;
