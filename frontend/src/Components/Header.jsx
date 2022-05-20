import React from 'react';
import { HeaderStyled } from '../styles';

function Header() {
  const response = JSON.parse(localStorage.getItem('to-do'));
  const { user: { userName } } = response;
  return (
    <HeaderStyled>
      <h3>To Do List</h3>
      <div>
        <p>{userName}</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
