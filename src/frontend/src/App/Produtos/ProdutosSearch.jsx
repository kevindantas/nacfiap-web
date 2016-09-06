import React, { Component } from 'react'

import './search.css';

class ProdutosSearch extends Component {
  render() {
    return (
      <form className="produtos-search">
        <input type="text" placeholder="Digite o nome do produto" />
        <button type="submit" className="button round">Pesquisar</button>
      </form>
    );
  }
}

export default ProdutosSearch;