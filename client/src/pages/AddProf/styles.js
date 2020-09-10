import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'Futura pt',sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;

  h5 {
    padding: 0;
    margin: 0;
    color: #ff0000;
  }

  h2 {
    font-size: 16px;
    color: #2F4858;
  }

  div {
    display: inline-block;
    position: relative;
    padding: 7px;
    text-align: center;
  }

  input {
    margin-left: 10px;
    padding: 6px;
    margin-bottom: 10px;
  }

  select {
    margin-left: 10px;
    padding: 5px;
  }

  button {
    cursor: pointer; 
    padding: 15px;
    border-radius: 10px;
    background-color: #00B4A2;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
  }
  button:hover{
    color: #2F4858;
  }
`;
