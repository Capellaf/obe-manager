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
  }

  input {
    margin-top: 10px;
    padding: 6px;
    border-radius: 8px;
  }
  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
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
  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
