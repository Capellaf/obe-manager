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
    margin-left: 10px;
    padding: 6px;
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

export const Span = styled.span`
  button {
    padding: 0;
    font-size: 14px;
    border: none
  }
  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export const ModalDiv = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 1;
  width: 60%;
  height:60%;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: #fffffd;
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0px 0 0, 0px 3px 3px #333;
  font-family: 'Futura pt',sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  margin-left: 20%;
  margin-top: 60px;
  animation-duration: 1s;
  animation-name: modalDelete;

  @keyframes modalDelete {
    from {
      margin-top: -60px;
    }
    to {
      margin-top: 60px;
    }
  }

  div {
    display: flex;
    position: absolute;
    width: 100%;
    height: 25%;
    justify-content: center;
    align-items: center;
    background-color: #2F4858;
    top: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  span {
    position: relative;
    margin-left: 160px;
  }

  h1 {
    margin-top: 40px;
    font-size: 14px;
    padding: 10px;
  }

  h2 {
    font-size: 16px;
    color: #fff;
  }

  button[type=close] {
    position: absolute;
    background-color: transparent;
    top: 0;
    right: 0;
    margin-right: 8px;
    margin-top: 8px;
    padding: 5px;
    font-size: 14px;
  }
`;

export const Table = styled.table`
  display: inline-block;
  position: relative;
  border-collapse: collapse;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 80%;
  overflow-y: auto;
  font-family: 'Futura pt',sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  border: none;
  margin-top: 10%;
  background-color: #fff;

  th {
    position: inline-block;
    background-color: #00D78B;
    border-radius: 8px;
    text-align: center;
    border: 3px solid;
    border-color: hidden;
    padding: 1px;
    color: #fff;
    font-size: 11px;
  }

  th[type=professor]{
    width: 280px;
  }

  th[type=id], th[type=number]{
    width: 35px;
  }

  th[type=btn]{
    width: 20px;
    background-color: #fff;
  }

  td {
  position: inline-block;
  background-color: #eee;
  border: 5px solid #fff;
  border-radius: 12px;
  align-items: center;
  text-align: center;
  padding: 1px;
  color: #666;
  font-weight: bold;
  font-size: 11px;
  font-family: 'Futura pt',sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  animation-duration: 300ms;
  animation-name: scaleappear;
  }

  @keyframes scaleappear {
    from {
      transform: scale(1, 0);
    }
    to{
      transform: scale(1, 1);
    }
  }

  td[type=btn]{
    background-color: transparent;
  }

  button {
    border: 0px;
    border-color: transparent;
    background-color: transparent;
    align-items: center;
    color: #555;
    padding: 5px;
    font-size: 14px;
  }
  button:hover {
    color: #00D78B;
  }
  button:active {
    border: 0px solid;
  }
  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;