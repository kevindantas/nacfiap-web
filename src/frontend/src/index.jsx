import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App/App';
import Login from './App/Login';
import ProdutosList from './App/Produtos/ProdutosList';



import AppAdmin from './AppAdmin/AppAdmin';
import RelatorioVendas from './AppAdmin/Relatorios/Vendas';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProdutosList} />
    </Route>

    <Route path="/login" component={Login} />

    <Route path="/admin" component={AppAdmin}>
      <Route path="relatorio/vendas" component={RelatorioVendas} />
    </Route>
  </Router>,
  document.getElementById('root')
);
