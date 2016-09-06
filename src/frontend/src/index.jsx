import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App/App';
import Login from './App/Login';



import AppAdmin from './AppAdmin/AppAdmin';
import RelatorioVendas from './AppAdmin/Relatorios/Vendas';

import { Router, Route, Link, browserHistory } from 'react-router'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/login" component={Login} />

    <Route path="/admin" component={AppAdmin}>
      <Route path="relatorio/vendas" component={RelatorioVendas} />
    </Route>
  </Router>,
  document.getElementById('root')
);
