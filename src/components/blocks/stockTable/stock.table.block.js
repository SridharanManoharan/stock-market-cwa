import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import copyProvider from '../../../resources';
const getCopy = copyProvider.getResource;

export default function StockTableBlock() {
  const { state } = useContext(StockMarketContext);

  return (
    state.data.stockMarketData &&
    <Table striped bordered hover>
      <thead>
          <tr>
            {getCopy('LandingPage.tableHeaders').map((elem, index) => {
              return(
                <th key={'key' + index}>{elem}</th>
              )
            })}
          </tr>
      </thead>
      <tbody>
            {state.data.stockMarketData.map(elem => {
              return (
                  <tr key={elem.stockSymbol}>
                      <td>{elem.stockSymbol}</td>
                      <td>{elem.type}</td>
                      <td>{elem.lastDividend}</td>
                      <td>{elem.fixedDividend}</td>
                      <td>{elem.parValue}</td>
                  </tr>
              )
            })}
      </tbody>
    </Table>
  );
}

