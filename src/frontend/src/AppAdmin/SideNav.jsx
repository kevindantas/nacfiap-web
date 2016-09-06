import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/SideNav.css';

class SideNav extends Component {
  render() {
    return (
      <aside className="sidenav">
        <img src={logo} className="app-logo" alt="logo"/>


        <h4>Bem-vindo(a)</h4>
        <h3>Kevin</h3>


        <nav>
          <ul>
            <li><a href="#">Lista Produtos</a></li>
            <li><a href="#">Cadastrar Produtos</a></li>
            <li><a href="/admin/relatorio/vendas">Relatório de Vendas</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}


export default SideNav;
