import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #F8961E;
  padding: 15px;
  color: #FFFFFF;
  width: 200px;
  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  input:focus {
    background: #DEE2E6;
  }
  select {
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 0px 0px 0px 0px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-size: 16px;
    transition: all 150ms ease;
    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
`;

export const TaskFormtyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #F8961E;
  padding: 15px;
  color: #FFFFFF;
  width: 500px;
  textarea {
    width: 100%;
    height: 200px;
  }
  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  input:focus {
    background: #DEE2E6;
  }
  select {
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 0px 0px 0px 0px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-size: 16px;
    transition: all 150ms ease;
    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
`;

export const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-color: #FFB703;
  `;

export const MainStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
  `;

export const HeaderStyled = styled.header`
  font-size: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #FB8500;
  color: #577590;
`;

export const FooterStyled = styled.footer`
  background-color: #219EBC;
  padding: 20px;
  color: #023047;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: absolute;
  bottom: 0;
  font-size: 18px;
  width: 100%;
  z-index: 10;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
    text-decoration: none;
    img {
      width: 30px;
    }
  }
  }
`;
