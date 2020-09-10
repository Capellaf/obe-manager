import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #006A84;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    margin: 10px 0 40px;
    margin-bottom: 5px;
    animation-duration: 2s;
    animation-name: fadeimg;
  }

  @keyframes fadeimg {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  p {
    color: #ff3333;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px 20px;
    color: #333;
    font-size: 15px;
    width: 90%;
    border: 1px solid #ddd;
    border-radius: 5px;
    &::placeholder {
      color: #999;
    }
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #00D78B;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }

  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    font-size: 16;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }
`;
