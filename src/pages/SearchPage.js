/**
 * Created by warapitiya on 2019-05-06.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Col } from 'reactstrap';
import StockMetaData from '../components/StockMetaData';


function SearchPage({ stocks, history }) {

  const handleClick = (symbol) => {
    history.push(`/stock/${symbol}`);
  };

  return (
    <div className="container">
      <div className="row">
        {stocks.map((stock, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-3">
            <Card
              inverse
              className={`border-0 bg-gradient-theme`}>
              <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardTitle>{stock.symbol}</CardTitle>
                <StockMetaData {...stock}/>
              </CardBody>
              <CardBody className="d-flex justify-content-end align-items-right">
                <Button outline color="light" onClick={() => handleClick(stock.symbol)}>
                  Click
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { stocks: state.stock.stocks };
}


export default connect(mapStateToProps, null)(SearchPage);
