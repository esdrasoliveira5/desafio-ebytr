import React from 'react';
import Footer from '../Components/Footer';
import FormLogin from '../Components/FormLogin';
import FormRegister from '../Components/FormRegister';
import Header from '../Components/Header';

function LoginPage() {
  return (
    <>
      <Header />
      LOGIN
      <FormLogin />
      <FormRegister />
      <Footer />
    </>
  );
}

export default LoginPage;
