import React, {Component} from 'react';

class RelatorioVendas extends Component {


  renderVendas() {
    return []
  }

  render() {
    return (
      <div>
        <h1>Relatório de Vendas</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Produto</th>
              <th>Cliente</th>
              <th>Data</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            { this.renderVendas() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default RelatorioVendas;