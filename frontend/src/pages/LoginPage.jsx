import React from 'react';
import Footer from '../Components/Footer';
import FormLogin from '../Components/FormLogin';
import FormRegister from '../Components/FormRegister';
import { BodyStyled, MainStyled } from '../styles';

function LoginPage() {
  return (
    <BodyStyled>
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
