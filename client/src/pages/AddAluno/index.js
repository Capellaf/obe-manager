import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router-dom";
import Logo from "../../assets/logo_full.png";
import { Container, NavBar, Menu, Conteudo, CheckSelect } from '../../components/globalstyle'
import { Form } from "./styles";

import { logout } from '../../services/auth'

function AddAluno() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
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
        <h1>Novo Aluno</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {(errors.firstName || errors.lastName || errors.email || errors.telefone) && <h5>Preencha todos os campos corretamente!</h5>}
          <div>
            <input type="text" name="firstName" placeholder="Nome" id="fistName" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="text" name="lastName" placeholder="Sobrenome" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="email" name="email" placeholder="Email" ref={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i})} />
            <input type="tel" name="telefone" placeholder="Telefone" ref={register({required: true, maxLength: 12, pattern: /^\d/i})} />
          </div>
          <div>
            <CheckSelect>
              <label disabled>Plano<hr></hr></label>
              <input value={1} type="radio" id="basic" name="plano" ref={register()} defaultChecked/>
              <label for="basic">Basic<hr></hr></label>
              <input value={2} type="radio" id="std" name="plano" ref={register()} />
              <label for="std">Standard<hr></hr></label>
              <input value={3} type="radio" id="vip" name="plano" ref={register()} />
              <label for="vip">VIP<hr></hr></label>
            </CheckSelect>
            <CheckSelect>
              <label disabled>Nível<hr></hr></label>
              <input value={1} type="radio" id="bsc" name="nivel" ref={register()} defaultChecked/>
              <label for="bsc">Básico<hr></hr></label>
              <input value={2} type="radio" id="mid" name="nivel" ref={register()} />
              <label for="mid">Intermediário<hr></hr></label>
            </CheckSelect>
          </div>
          <CheckSelect>
            <label disabled>Dias disponíveis<hr></hr></label>
            <input value={1} type="checkbox" id="dom" name="daysOn" ref={register()} defaultChecked/>
            <label for="dom">Domingo<hr></hr></label>
            <input value={2} type="checkbox" id="seg" name="daysOn" ref={register()} defaultChecked/>
            <label for="seg">Segunda<hr></hr></label>
            <input value={3} type="checkbox" id="ter" name="daysOn" ref={register()} defaultChecked/>
            <label for="ter">Terça<hr></hr></label>
            <input value={4} type="checkbox" id="qua" name="daysOn" ref={register()} defaultChecked/>
            <label for="qua">Quarta<hr></hr></label>
            <input value={5} type="checkbox" id="qui" name="daysOn" ref={register()} defaultChecked/>
            <label for="qui">Quinta<hr></hr></label>
            <input value={6} type="checkbox" id="sex" name="daysOn" ref={register()} defaultChecked/>
            <label for="sex">Sexta<hr></hr></label>
            <input value={7} type="checkbox" id="sab" name="daysOn" ref={register()} defaultChecked/>
            <label for="sab">Sábado<hr></hr></label>
            <p></p>
            <label disabled>Períodos disponíveis<hr></hr></label>
            <input value={1} type="checkbox"  id="mat" name="perOn" ref={register()} defaultChecked/>
            <label for="mat">Matutino<hr></hr></label>
            <input value={2} type="checkbox" id="ves" name="perOn" ref={register()} defaultChecked/>
            <label for="ves">Vespertino<hr></hr></label>
            <input value={3} type="checkbox" id="not" name="perOn" ref={register()} defaultChecked/>
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

export default withRouter(AddAluno);
