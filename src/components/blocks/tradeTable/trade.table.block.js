import React, { useContext } from 'react';
import { Button, Table, Jumbotron, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import copyProvider from '../../../resources';

const getCopy = copyProvider.getResource;

export default function TradeTableBlock() {
  const { state } = useContext(StockMarketContext);
  const history = useHistory();

  return (
    state.trade.trade.length === 0 ? 
    (<Jumbotron fluid>
      <Container>
          <h1>{getCopy('TradePage.noLogHeader')}</h1>
          <p>
              {getCopy('TradePage.noLogDescription')}
          </p>
          <p>
            <Button variant="primary" onClick={()=> history.push('/tradeForm')}>Go to Record Trade Form</Button>
          </p>
      </Container>
    </Jumbotron>) :
    (<Table striped bordered hover>
      <thead>
          <tr>
            {getCopy('TradePage.tableHeaders').map((elem, index) => {
              return(
                <th key={'key' + index}>{elem}</th>
              )
            })}
          </tr>
      </thead>
      <tbody>
            {state.trade.trade.map((elem, i) => {
              return (
                  <tr key={elem.createdAt + elem.symbol + i}>
                      <td>{elem.sharesQuantity}</td>
                      <td>{elem.symbol}</td>
                      <td>{elem.tradePrice}</td>
                      <td>{elem.tradeType}</td>
                      <td>{elem.createdAt}</td>
                  </tr>
              )
            })}
      </tbody>
    </Table>)
  );
}
