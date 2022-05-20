const URL_FETCH = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/';
const APLICATION = 'application/json';

async function register({ userName, email, password }) {
  try {
    const response = await fetch(`${URL_FETCH}user`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function loginUser({ email, password }) {
  try {
    const response = await fetch(`${URL_FETCH}user/login`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function createTask(token, task) {
  try {
    const response = await fetch(`${URL_FETCH}task`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
      body: JSON.stringify(task),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

export default {
  register,
  loginUser,
  createTask,
};
