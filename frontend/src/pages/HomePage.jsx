import React from 'react';
import Footer from '../Components/Footer';
import FormTask from '../Components/FormTask';
import Header from '../Components/Header';
import { BodyStyled } from '../styles';

function HomePage() {
  return (
    <BodyStyled>
      <Header />
      HOME
      <FormTask />
      <Footer />
    </BodyStyled>
  );
}

export default HomePage;
