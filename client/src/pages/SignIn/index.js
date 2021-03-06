import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { Container, Form } from './styles';
import Logo from '../../assets/logo.png';

import { login } from "../../services/auth";

import api from '../../services/api';

function SignIn() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async e => {
    e.preventDefault();
    if (!username || !pass) {
      setError("Preencha todos os campos!");
    } else {
      /*api.post('/login', {username, pass}).then(async (response) => {
        const body = response.data;
        if (response.status !== 200){
          setError(body.message)
          return
        }
        login(body.token)
        window.location = ("/alunos");
      });*/
      try { 
        const response = await fetch("http://obemanager-com-br.umbler.net/obeapi/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, pass })
        });
        const body = await response.json();
        if (response.status !== 200) {
          setError(body.message) 
          return
        }
        login(body.token);
        window.location = ("/alunos"); 
      } catch (err) {
        setError("Falha ao autenticar o usuário!");
      }
    }
  };
    return(
        <Container>
             <Form onSubmit={handleSignIn}>
                <img src={ Logo } alt="Logo Obe" />
                <p>{error}</p>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => setPass(e.target.value)}
                />
                <button type="submit">Login</button>  
            </Form> 
        </Container>
    );
}

export default withRouter(SignIn);