import styled from 'styled-components';

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

export const Table = styled.table`
  display: inline-block;
  position: relative;
  border-collapse: collapse;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 72%;
  overflow-y: auto;
  padding: 10px;
  font-size: 14px;
  font-family: 'Futura pt',sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  border: 1px solid;
  border-radius: 0px;
  border-color: #ddd;
  border-top: 0;
  border-bottom: 0;

  th {
    position: inline-block;
    background-color: #00D78B;
    border: 5px solid #fff;
    border-radius: 12px;
    text-align: center;
    padding: 5px;
    color: #fff;
    font-size: 12px;
  }

  th[type=nome], th[type=email]{
    width: 300px;
  }

  th[type=cpf], th[type=tel]{
    width: 90px;
  }

  th[type=id], th[type=nivel], th[type=turma]{
    width: 50px;
  }

  td {
  position: inline-block;
  background-color: #eee;
  border: 5px solid #fff;
  border-radius: 12px;
  align-items: center;
  text-align: center;
  padding: 5px;
  color: #555;
  font-weight: bold;
  font-size: 12px;
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

  button {
    border: 0px;
    border-color: transparent;
    background-color: transparent;
    align-items: center;
    color: #555;
    padding: 5px;
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

export const ModalDiv = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 1;
  width: 40%;
  height: 30%;
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
  margin-left: 30%;
  margin-top: 100px;
  animation-duration: 1s;
  animation-name: modalDelete;

  @keyframes modalDelete {
    from {
      margin-top: -60px;
    }
    to {
      margin-top: 100px;
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

  button {
    border-radius: 10px;
    padding: 12px;
    font-size: 12px;
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
  }

  button:hover{
    color: #000;
  }

  button[type=yes]{
    background-color: #00B4A2;
  }
  button[type=cancel]{
    background-color: #D33B2C;
  }
`;