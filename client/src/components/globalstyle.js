import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #006A84;
  margin: 0 auto !important;

  p {
    font-size: 10px;
    opacity: 75%;
    color: #fff;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  z-index: 100;
  border-bottom: 5px;
  margin: 0 auto;
  box-shadow: 0px 0 0, 0px 5px 5px #333;
  background-color: #fff;

  div{
    display: inline-block;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
  }

  img {
    width: 25%;
    max-width: 110px;
    padding: 5px;
    margin: 0 auto;
    margin-left: 10px;
  }
`;

export const Menu = styled.ul `
  display: inline-block; 
  padding: 10px;
  float: right;
  background-color: hidden;
  font-family: 'HammersmithOne',sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;

  ul {
    list-style: none;
  }

   li {
    display: inline;
    margin: 0 auto;
    float: left;
  }

  a {
    display: block;
    position: relative;
    text-align: center;
    padding: 0 20px;
    justify-content: center;
    color: #777;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #00D78B;
  }
  a:active {
    font-size: 110%;
  }

  a2 {
    width: 1px;
    height: 10px;
    padding: 20px 0;
    color: #000;
    border: 1px inset #fff;
    border-radius: 50%;
  }

`;

export const Conteudo = styled.div`
  display: inline-block;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0px 0 0, 0px 5px 5px #333;
  width: 70%;
  height: 100%;
  margin-top: 1px;

  h1 {
    display: block;
    position: relative;
    text-align: center;
    padding: 0;
    font-size: 20px;
    font-family: 'Futura pt',sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #666;
    font-weight: bold;
  }

  button {
    display: inline-block;
    margin-bottom: -10px;
    padding: 10px;
    border: 0px;
    background-color: #fff;
    font-size: 10px;
  }
  button:hover {
    color: #00D78B;
  }
  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export const CheckSelect = styled.div`
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  box-shadow: 0px 0 0, 0px 3px 3px #333;
  margin-bottom: 10px;

  input[type=radio]{
    display: none;
  }

  input[type=radio] + label{
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 80px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    transition: 200ms;
  }

  input[type=radio]:checked + label{
    background-color: #008F9F;
    color: #fff;
  }

  label {
    user-select: none; 
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox] + label{
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 65px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    transition: 200ms;
  }

  input[type=checkbox]:checked + label{
    background-color: #008F9F;
    color: #fff;
  }
`;

export const SearchBar = styled.div`
  display:flex;
  position: relative;
  flex-direction: row;
  justify-content: left;
  margin-left: 39%;
  width: 100%;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;

  input {
    display: block;
    position: relative;
    width: 20%;
    background-color: #eee;
    border-color: transparent;
    border-radius: 20px;
    padding: 8px;
  }

  input:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

  span {
    display:block;
    position:absolute;
    color: #00D78B;
    background: transparent;
    padding: 10px;
    left: 18.5%;
    opacity: 45%;
  }
`;

