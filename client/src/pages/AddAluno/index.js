import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router-dom";
import Logo from "../../assets/logo_full.png";
import { Container, NavBar, Menu, Conteudo, CheckSelect } from '../../components/globalstyle'
import { Form, ModalDiv, Table } from "./styles";
import { GiSaveArrow } from 'react-icons/gi';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';


import { logout, getToken } from '../../services/auth'

function AddAluno() {
  const { register, handleSubmit, errors } = useForm();
  const [modal, setModal] = useState(false);
  const [newAluno, setNewAluno] = useState({});
  const [turma, setTurma] = useState('')
  const [per, setPer] = useState('');

  const submitAluno = async (idTurma) => {
    newAluno.idTurma = idTurma;
    const token = getToken();
    let headers = {"Content-Type": "application/json"};
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }
    const response = await fetch('/obeapi/newAluno', {
      method: 'POST',
      headers,
      body: JSON.stringify(newAluno)
    });

    if (response.status === 200) {
      toggle('');
      alert("Aluno cadastrado com sucesso!")
      window.location.reload();
    }else if(response.status === 409) {
      toggle('');
      alert(response.message);
    }else {
      alert("Ocorreu um erro ao cadastrar!");
      window.location.reaload()
    }
  }

  const toggle = (data) => {
    if (modal === false) {
      setNewAluno(data);
      setPer(data.perOn)
    }
    setModal(!modal);
  }

  const handleLogout = async e => {
    e.preventDefault();
    logout();
    window.location.reload();
  }

  useEffect(() => {
    const showTurmas = async() => {
      const response = await fetch('/obeapi/listaTurmas/match/'+per, {method: 'GET'});
      const body = await response.json();

      if (response.status !== 200) {
        console.log(body.message)
      } else{
        setTurma(body)
      }
    }
    showTurmas();
  }, [per])

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
      {modal && 
          <ModalDiv>
            <div>
              <button type="close" onClick={() => toggle('')}><GrClose/></button>
              <h2>Turmas disponíveis</h2>
            </div>
            <Table>
                <tr>
                  <th type="id">Id</th>
                  <th type="number">Aulas</th>
                  <th type="number">Alunos</th>
                  <th type="diahr">Primeira aula</th>
                  <th type="diahr">Segunda aula</th>
                  <th type="professor">Professor</th>
                  <th type="btn"><button onClick={() => window.location.replace('/newTurma')}><AiOutlinePlusSquare/></button></th>
                </tr>
                <tbody>
                {
                  turma.map(function(turma){
                    return <tr><td>{turma.idTurma}</td> <td>{turma.nAulas}</td> <td>{turma.nAlunos}</td> <td>{turma.diaUm+' '+turma.hrUm}</td> <td>{turma.diaDois+' '+turma.hrDois}</td><td>{turma.nomeProfessor}</td><td type="btn"><button onClick={() => submitAluno(turma.idTurma)}><GiSaveArrow/></button></td></tr>;
                  }.bind(this))
                }
              </tbody>
            </Table>
          </ModalDiv>
        }
        <button onClick={handleLogout}>Logout</button>
        <h1>Novo Aluno</h1>
        <Form onSubmit={handleSubmit(toggle)}>
          {(errors.firstName || errors.lastName || errors.email || errors.telefone) && <h5>Preencha todos os campos corretamente!</h5>}
          <div>
            <input type="text" name="firstName" placeholder="Nome" id="fistName" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="text" name="lastName" placeholder="Sobrenome" ref={register({required: true, pattern: /^[A-Za-z ]+$/i})} />
            <input type="email" name="email" placeholder="Email" ref={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i})} />
            <input type="tel" name="telefone" placeholder="Telefone" ref={register({required: true, maxLength: 12, pattern: /^\d/i})} />
          </div>
          <div>
            <CheckSelect>
              <label disabled>Plano<hr></hr></label>
              <input value={1} type="radio" id="basic" name="idPlano" ref={register()} defaultChecked/>
              <label for="basic">Basic<hr></hr></label>
              <input value={2} type="radio" id="std" name="=idPlano" ref={register()} />
              <label for="std">Standard<hr></hr></label>
              <input value={3} type="radio" id="vip" name="idPlano" ref={register()} />
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
            <input value={'dom'} type="checkbox" id="dom" name="daysOn" ref={register()} defaultChecked/>
            <label for="dom">Domingo<hr></hr></label>
            <input value={'seg'} type="checkbox" id="seg" name="daysOn" ref={register()} defaultChecked/>
            <label for="seg">Segunda<hr></hr></label>
            <input value={'ter'} type="checkbox" id="ter" name="daysOn" ref={register()} defaultChecked/>
            <label for="ter">Terça<hr></hr></label>
            <input value={'qua'} type="checkbox" id="qua" name="daysOn" ref={register()} defaultChecked/>
            <label for="qua">Quarta<hr></hr></label>
            <input value={'qui'} type="checkbox" id="qui" name="daysOn" ref={register()} defaultChecked/>
            <label for="qui">Quinta<hr></hr></label>
            <input value={'sex'} type="checkbox" id="sex" name="daysOn" ref={register()} defaultChecked/>
            <label for="sex">Sexta<hr></hr></label>
            <input value={'sab'} type="checkbox" id="sab" name="daysOn" ref={register()} defaultChecked/>
            <label for="sab">Sábado<hr></hr></label>
            <p></p>
            <label disabled>Períodos disponíveis<hr></hr></label>
            <input value={'matu'} type="checkbox"  id="mat" name="perOn" ref={register()} defaultChecked/>
            <label for="mat">Matutino<hr></hr></label>
            <input value={'vesp'} type="checkbox" id="ves" name="perOn" ref={register()} defaultChecked/>
            <label for="ves">Vespertino<hr></hr></label>
            <input value={'notu'} type="checkbox" id="not" name="perOn" ref={register()} defaultChecked/>
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
