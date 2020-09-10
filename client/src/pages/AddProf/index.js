import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router-dom";
import Logo from "../../assets/logo_full.png";
import { Container, NavBar, Menu, Conteudo, CheckSelect } from '../../components/globalstyle';
import { Form } from './styles';

import { logout, getToken } from '../../services/auth'

function AddProf() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const token = getToken();
    let headers = {'Content-Type': 'application/json'};
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }
    const response = await fetch('/obeapi/newProf', {
      method: 'POST',
      headers,
      body: JSON.stringify({data})
    });

    if (response.status === 200) {
      alert("Professor cadastrado com sucesso!")
      window.location.reload();
    } else if (response.status === 409) {
      const body = await response.json();
      alert(body.message)
    } else {
      alert("Ocorreu um erro ao cadastrar!");
    }
  }

  const handleLogout = async e => {
    e.preventDefault();
    logout();
    window.location.reload();
  }

  return (
    <Container>
      <NavBar>
        <div>
          <img src={Logo} alt="Logo Obe"/>
          <Menu>
            <ul>
                <li><a href="/alunos">Aluno</a></li>
                <li><a2></a2></li>
                <li><a href="/professores">Professor</a></li>
                <li><a2></a2></li>
                <li><a href="/turmas">Turma</a></li>
            </ul>
          </Menu> 
        </div>
      </NavBar>
      <Conteudo>
        <button onClick={handleLogout}>Logout</button>
        <h1>Novo Professor</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {(errors.firstName || errors.lastName || errors.cpf || errors.email || errors.telefone) && <h5>Preencha todos os campos corretamente!</h5>}
          <div>
            <input type="text" name="firstName" placeholder="Nome" id="fistName" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="text" name="lastName" placeholder="Sobrenome" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="text" name="cpf" placeholder="CPF" ref={register({required: true, pattern: /^\d/i, minLength: 11, maxLength: 11})} />
            <input type="email" name="email" placeholder="Email" ref={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i})} />
            <input type="tel" name="telefone" placeholder="Telefone" ref={register({required: true, maxLength: 12, pattern: /^\d/i})} />
            <input type="number" step="0.5" name="valorHora" min="15.00" placeholder="Hora (R$)" ref={register({required: true, pattern: /^\d/i})} />
          </div>
          <div>

          </div>
          <CheckSelect>
            <label disabled>Dias disponíveis<hr></hr></label>
            <input value={'dom'} type="checkbox" id="dom" name="daysOn" ref={register()} />
            <label for="dom">Domingo<hr></hr></label>
            <input value={'seg'} type="checkbox" id="seg" name="daysOn" ref={register()} />
            <label for="seg">Segunda<hr></hr></label>
            <input value={'ter'} type="checkbox" id="ter" name="daysOn" ref={register()} />
            <label for="ter">Terça<hr></hr></label>
            <input value={'qua'} type="checkbox" id="qua" name="daysOn" ref={register()} />
            <label for="qua">Quarta<hr></hr></label>
            <input value={'qui'} type="checkbox" id="qui" name="daysOn" ref={register()} />
            <label for="qui">Quinta<hr></hr></label>
            <input value={'sex'} type="checkbox" id="sex" name="daysOn" ref={register()} />
            <label for="sex">Sexta<hr></hr></label>
            <input value={'sab'} type="checkbox" id="sab" name="daysOn" ref={register()} />
            <label for="sab">Sábado<hr></hr></label>
            <p></p>
            <label disabled>Períodos disponíveis<hr></hr></label>
            <input value={'matu'} type="checkbox"  id="mat" name="perOn" ref={register()} />
            <label for="mat">Matutino<hr></hr></label>
            <input value={'vesp'} type="checkbox" id="ves" name="perOn" ref={register()} />
            <label for="ves">Vespertino<hr></hr></label>
            <input value={'notu'} type="checkbox" id="not" name="perOn" ref={register()} />
            <label for="not">Noturno<hr></hr></label>
          </CheckSelect>
          <div>
            <button>Cadastrar</button>
          </div>
        </Form>
      </Conteudo>
      <p>Obe Innovative Education - 2020</p>
    </Container>
  )
}

export default withRouter(AddProf);
