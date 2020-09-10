import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "../../assets/logo_full.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { Container, Conteudo, NavBar, Menu, SearchBar} from "../../components/globalstyle";
import { Table, Span } from './styles';

import { logout } from "../../services/auth";

function ShowTurmas (props) {
  const [data, setData] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  
  const handleLogout = async e => {
    e.preventDefault();
    logout();
    window.location.reload();
  }

  const handleEdit = () => {

  }

  useEffect(() => {
    const showTurmas = async() => {
      const response = await fetch('/obeapi/listaTurmas/'+nameSearch, {method: 'GET'});
      const body = await response.json();

      if (response.status !== 200) {
        console.log(body.message)
      } else{
        setData(body)
      }
    }
    showTurmas();
  }, [nameSearch])

  return(
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
        <h1>Lista de Turmas</h1>
        <SearchBar>
          <input type="text" id="nomeBusca" placeholder="Nome do Professor" onChange={e => setNameSearch(e.target.value)}/>
          <span>
            <BiSearchAlt/>
          </span>
        </SearchBar>
        <hr></hr>
        <Span><button onClick={() => window.location.replace('/newTurma')}><AiOutlineUsergroupAdd/> Nova turma</button></Span>
        <br></br>
        <Table>
            <tr>
              <th type="id">Id</th>
              <th type="number">Aulas</th>
              <th type="number">Alunos</th>
              <th type="diahr">Primeira aula</th>
              <th type="diahr">Segunda aula</th>
              <th type="professor">Professor</th>
            </tr>
            <tbody>
            {
              data.map(function(data){
                return <tr><td>{data.idTurma}</td> <td>{data.nAulas}</td> <td>{data.nAlunos}</td> <td>{data.diaUm+' '+data.hrUm}</td> <td>{data.diaDois+' '+data.hrDois}</td><td>{data.nomeProfessor}</td><td><button id={data.idturma} onClick={() => handleEdit(data.idturma)}><FaPencilAlt/></button></td></tr>;
              }.bind(this))
            }
          </tbody>
        </Table>
      </Conteudo>
      <p>Obe Innovative Education - 2020</p>
    </Container>
  )
}

export default withRouter(ShowTurmas);