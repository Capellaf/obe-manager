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

function AddTurma() {
  const { register, handleSubmit, errors } = useForm();
  const [modal, setModal] = useState(false);
  const [newTurma, setNewTurma] = useState({});
  const [professor, setProfessor] = useState('')
  const [agenda, setAgenda] = useState([]);

  const submitTurma = async (idProfessor, nomeProfessor) => {
    newTurma.idProfessor = idProfessor;
    newTurma.nomeProfessor = nomeProfessor;
    const token = getToken();
    let headers = {"Content-Type": "application/json"};
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }
    const response = await fetch('/obeapi/newTurma', {
      method: 'POST',
      headers,
      body: JSON.stringify(newTurma)
    });

    if (response.status === 200) {
      toggle('');
      alert("Turma cadastrada com sucesso!")
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
      setNewTurma(data);
      let diaUm = data.diaUm;
      let diaDois = data.diaDois;
      let horaUm = data.horaUm;
      let horaDois = data.horaDois;
      let per = parseInt(horaUm);
      if (per >= 18 ){
        per = 'notu';
      } else if (per >= 13) {
        per = 'vesp';
      } else {
        per = 'matu';
      }
      setAgenda([diaUm, diaDois, horaUm, horaDois, per])
    }
    setModal(!modal);
  }

  useEffect(() => {
    const showProfessores = async() => {
      const response = await fetch('/obeapi/listaProf/match/'+agenda, {method: 'GET'});
      const body = await response.json();

      if (response.status !== 200) {
        console.log(body.message)
      } else{
        setProfessor(body) //EU ESTOU AQUI ----- MATCH PROFESSOR E TURMA
      }
    }
    showProfessores();
  }, [agenda])

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
      {modal && 
          <ModalDiv>
            <div>
              <button type="close" onClick={() => toggle('')}><GrClose/></button>
              <h2>Professores disponíveis</h2>
            </div>
            <Table>
                <tr>
                  <th type="id">Id</th>
                  <th type="professor">Professor</th>
                  <th type="btn"><button onClick={() => window.location.replace('/newProf')}><AiOutlinePlusSquare/></button></th>
                </tr>
                <tbody>
                {
                  professor.map(function(professor){
                    return <tr><td>{professor.idProfessor}</td> <td>{professor.nome}</td><td type="btn"><button onClick={() => submitTurma(professor.idProfessor, professor.nome)}><GiSaveArrow/></button></td></tr>;
                  }.bind(this))
                }
              </tbody>
            </Table>
          </ModalDiv>
        }
        <button onClick={handleLogout}>Logout</button>
        <h1>Nova Turma</h1>
        <Form onSubmit={handleSubmit(toggle)}>
          {(errors.horaUm) || (errors.horaDois) && <h5>Todos os campos necessários!</h5>}
          <div>
            <CheckSelect>
              <label disabled>Dia e horário 1<hr></hr></label>
              <input value={'dom'} type="radio" id="dom" name="diaUm" ref={register()} defaultChecked/>
              <label for="dom">Domingo<hr></hr></label>
              <input value={'seg'} type="radio" id="seg" name="diaUm" ref={register()} />
              <label for="seg">Segunda<hr></hr></label>
              <input value={'ter'} type="radio" id="ter" name="diaUm" ref={register()} />
              <label for="ter">Terça<hr></hr></label>
              <input value={'qua'} type="radio" id="qua" name="diaUm" ref={register()} />
              <label for="qua">Quarta<hr></hr></label>
              <input value={'qui'} type="radio" id="qui" name="diaUm" ref={register()} />
              <label for="qui">Quinta<hr></hr></label>
              <input value={'sex'} type="radio" id="sex" name="diaUm" ref={register()} />
              <label for="sex">Sexta<hr></hr></label>
              <input value={'sab'} type="radio" id="sab" name="diaUm" ref={register()} />
              <label for="sab">Sábado<hr></hr></label>
              <br></br>
              <input type="time" step="0:30" name="horaUm" min="08:00" max="22:00" placeholder="Horário" ref={register({required: true, pattern: /^\d/i})} />
            </CheckSelect> 
          </div>
          <div>
            <CheckSelect>
              <label disabled>Dia e horário 2<hr></hr></label>
              <input value={'dom'} type="radio" id="dom2" name="diaDois" ref={register()} defaultChecked/>
              <label for="dom2">Domingo<hr></hr></label>
              <input value={'seg'} type="radio" id="seg2" name="diaDois" ref={register()} />
              <label for="seg2">Segunda<hr></hr></label>
              <input value={'ter'} type="radio" id="ter2" name="diaDois" ref={register()} />
              <label for="ter2">Terça<hr></hr></label>
              <input value={'qua'} type="radio" id="qua2" name="diaDois" ref={register()} />
              <label for="qua2">Quarta<hr></hr></label>
              <input value={'qui'} type="radio" id="qui2" name="diaDois" ref={register()} />
              <label for="qui2">Quinta<hr></hr></label>
              <input value={'sex'} type="radio" id="sex2" name="diaDois" ref={register()} />
              <label for="sex2">Sexta<hr></hr></label>
              <input value={'sab'} type="radio" id="sab2" name="diaDois" ref={register()} />
              <label for="sab2">Sábado<hr></hr></label>
              <br></br>
              <input type="time" step="0:30" name="horaDois" min="08:00" max="22:00" placeholder="Horário" ref={register({required: true, pattern: /^\d/i})} />
            </CheckSelect> 
          </div>
          <div>
            <button>Cadastrar</button>
          </div>
        </Form>
      </Conteudo>
      <p>Obe Innovative Education - 2020</p>
    </Container>
  )
}

export default withRouter(AddTurma);
