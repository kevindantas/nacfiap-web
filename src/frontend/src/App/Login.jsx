import React, { Component } from 'react';
import './login.css';
import logo from '../logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="login" id="login">
        <img src={logo} className="app-logo" alt="logo"/>
        <form>
          <fieldset>
            <legend>Login</legend>

            <label htmlFor="usuario">
              Usuário
              <input type="text" id="usuario"/>
            </label>

            <label htmlFor="senha">
              Senha
              <input type="text" id="senha"/>
            </label>

            <button type="submit" className="button round">
              Logar
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Login;