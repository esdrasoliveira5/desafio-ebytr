import React from 'react';
import Footer from '../Components/Footer';
import FormLogin from '../Components/FormLogin';
import FormRegister from '../Components/FormRegister';
import Header from '../Components/Header';
import { BodyStyled, MainStyled } from '../styles';

function LoginPage() {
  return (
    <BodyStyled>
      <Header />
      LOGIN
      <MainStyled>
        <FormRegister />
        <FormLogin />
      </MainStyled>
      <Footer />
    </BodyStyled>
  );
}

export default LoginPage;
