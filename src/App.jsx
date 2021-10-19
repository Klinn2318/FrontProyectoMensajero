import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/">
          <a Style="font-size: 20px; position: absolute; top: 50%; left:50%; transform: translate(-50%,-50%); text-decoration:underline; color: #45f" href="/login">Inicio de sesion en: http://localhost:3000/login</a>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;