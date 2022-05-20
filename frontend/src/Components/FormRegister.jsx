import React, { useEffect } from 'react';

function FormRegister() {
  const [form, setForm] = useEffect({
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
      <label htmlFor="userName">
        <input
          type="text"
          id="userName"
          name="userName"
          value={form.name}
          onChange={(event) => handleForms(event)}
        />
      </label>
      <label htmlFor="email">
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={(event) => handleForms(event)}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={(event) => handleForms(event)}
        />
      </label>
      <label htmlFor="confirmPassword">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={(event) => handleForms(event)}
        />
      </label>
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
