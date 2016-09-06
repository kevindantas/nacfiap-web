import React, { Component } from 'react'

import ProdutosSearch from './ProdutosSearch';

class ProdutosList extends Component {
  render() {
    return (
      <div>
        <h1>Produtos</h1>
        <ProdutosSearch />
      </div>
    );
  }
}

export default ProdutosList;