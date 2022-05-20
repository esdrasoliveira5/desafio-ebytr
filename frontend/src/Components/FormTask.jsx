import React, { useState } from 'react';
import { TaskFormtyled } from '../styles';
import LabeledInput from './Input';
import services from '../services/fetch';

function FormTask() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pendente',
  });

  const handleForms = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('to-do'));
    const response = await services.createTask(token, form);
    if (response.error === undefined) {
      global.alert('Tarefa Salva!');
    }
  };

  return (
    <TaskFormtyled>
      <LabeledInput
        type="text"
        name="title"
        label="Titulo"
        value={form.title}
        handle={handleForms}
      />
      <label htmlFor="description">
        Descricao
        <textarea
          name="description"
          id="description"
          value={form.description}
          onChange={(e) => handleForms(e)}
        />
      </label>
      <select
        name="status"
        onChange={handleForms}
        value={form.status}
      >
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        SALVAR
      </button>
    </TaskFormtyled>
  );
}
export default FormTask;
