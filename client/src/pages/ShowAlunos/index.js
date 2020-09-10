import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "../../assets/logo_full.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Container, Conteudo, NavBar, Menu, SearchBar} from "../../components/globalstyle";
import { Table, Span, ModalDiv } from './styles';

import { logout, getToken } from "../../services/auth";

function ShowAlunos (props) {
  const [data, setData] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [nomeDel, setNomeDel] = useState('');
  const [idDel, setIdDel] = useState('');

  const toggle = (id,nome) => {
    if (modal === false) {
      setNomeDel(nome);
      setIdDel(id);
    }
    setModal(!modal);
  }
  
  const handleLogout = async e => {
    e.preventDefault();
    logout();
    window.location.reload();
  }

  const handleEdit = () => {

  }

  const handleDelete = async () => {
    let id = idDel;
    const token = getToken();
    let headers = {"Content-Type": "application/json"};
    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }
    const response = await fetch('/obeapi/delAluno', {
      method: 'DELETE',
      headers,
      body: JSON.stringify({id})
    });

    if (response.status !== 200) {
      alert("Não foi possível excluir o usuário!");
    } else {
      toggle('','')
      window.location.reload();
    }
  }

  useEffect(() => {
    const showAlunos = async() => {
      const response = await fetch('/obeapi/listaAlunos/'+nameSearch, {method: 'GET'});
      const body = await response.json();

      if (response.status !== 200) {
        console.log(body.message)
      } else{
        setData(body)
      }
    }
    showAlunos();
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
        {modal && 
          <ModalDiv>
            <div><h2>Alerta de exclusão</h2></div>
            <h1>Deseja realmente excluir o aluno {nomeDel}?</h1>
            <span>
              <button type="yes" onClick={handleDelete}>Sim, deletar</button>
              <button type="cancel" onClick={() => toggle('','')}>Cancelar</button>
            </span>
          </ModalDiv>
        }
        <button onClick={handleLogout}>Logout</button>
        <h1>Lista de Alunos</h1>
        <SearchBar>
          <input type="text" id="nomeBusca" placeholder="Nome do aluno" onChange={e => setNameSearch(e.target.value)}/>
          <span>
            <BiSearchAlt/>
          </span>
        </SearchBar>
        <hr></hr>
        <Span><button onClick={() => window.location.replace('/newAluno')}><AiOutlineUserAdd/> Novo aluno</button></Span>
        <Table>
            <tr>
              <th type="id">Id</th>
              <th type="nome">Nome</th>
              <th type="cpf">Cpf</th>
              <th type="email">Email</th>
              <th type="tel">Telefone</th>
              <th type="nivel">Nível</th>
              <th type="turma">Turma</th>
            </tr>
            <tbody>
            {
              data.map(function(data){
                return <tr><td>{data.idAluno}</td> <td>{data.firstName+' '+data.lastName}</td> <td>{data.cpf}</td> <td>{data.email}</td> <td>{data.telefone}</td><td>{data.nivel}</td><td>{data.idTurma}</td><td><button id={data.idAluno} onClick={() => handleEdit(data.idAluno)}><FaPencilAlt/></button></td><td><button onClick={() => toggle(data.idAluno,data.firstName+' '+data.lastName)}><FaTrashAlt/></button></td></tr>;
              }.bind(this))
            }
          </tbody>
        </Table>
      </Conteudo>
      <p>Obe Innovative Education - 2020</p>
    </Container>
  )
}

export default withRouter(ShowAlunos);