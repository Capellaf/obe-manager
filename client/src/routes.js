import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from './pages/SignIn';
import ShowAlunos from './pages/ShowAlunos';
import ShowProf from './pages/ShowProf';
import ShowTurma from './pages/ShowTurma';
import AddAluno from './pages/AddAluno';
import AddProf from './pages/AddProf';
import AddTurma from './pages/AddTurma';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );

  const NoBackRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Redirect to='/alunos' />} />
            <NoBackRoute path='/login' component= {SignIn} />
            <PrivateRoute path='/alunos' component={ShowAlunos} />
            <PrivateRoute path='/professores' component={ShowProf} />
            <PrivateRoute path='/turmas' component={ShowTurma} />
            <PrivateRoute path='/newaluno' component={AddAluno} />
            <PrivateRoute path='/newProf' component={AddProf} />
            <PrivateRoute path='/newTurma' component={AddTurma} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;