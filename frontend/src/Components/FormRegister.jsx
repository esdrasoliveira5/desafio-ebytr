import React, { useState } from 'react';
import LabeledInput from './Input';

function FormRegister() {
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

  const handleRegister = () => {
    console.log('Register');
  };

  return (
    <form>
      <LabeledInput
        type="text"
        name="userName"
        value={form.name}
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
