/**
 * Created by warapitiya on 2019-05-07.
 */

import React, { useEffect, useState } from 'react';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledButtonDropdown } from 'reactstrap';
import { connect } from 'react-redux';
import { loadStockPrice } from '../store/actions/price.actions';

function StockPage({ onStockPeriodChange, match, prices }) {
  const _times = [
    '1m',
    '3m',
    '6m',
  ];
  const [timeRange, setTimeRange] = useState(_times[0]);

  useEffect(() => {
    const { stockquote } = match.params;
    onStockPeriodChange(stockquote, timeRange);
  }, [timeRange]);

  /**
   * Handle select on change
   * @param val
   */
  const handleSelect = (val) => {
    setTimeRange(val);
  };

  return (<div className="container">
    <div className="row">
      <Col md={3} sm={6} xs={12} className="mb-3">
        <label>Time Range:</label>
        <UncontrolledButtonDropdown>
          <DropdownToggle
            caret
            color={'primary'}
            className="text-capitalize m-1">
            {timeRange}
          </DropdownToggle>
          <DropdownMenu>
            {_times && _times.map((time, i) => {
              return (
                <DropdownItem onClick={() => handleSelect(time)} key={i}>{time}</DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </Col>
      <Col md={9} sm={6} xs={12} className="mb-3">
        <Table {...{ 'default': true }}>
          <thead>
          <tr>
            <th>Date</th>
            <th>Close</th>
          </tr>
          </thead>
          <tbody>
          {prices && prices.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.date}</td>
                <td>{data.close}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </Col>
    </div>
  </div>);
}

function mapStateToProps(state) {
  return { prices: state.price.prices };
}

function mapDispatchToProps(dispatch) {
  return {
    onStockPeriodChange: (symbol, period) => dispatch(loadStockPrice(symbol, period)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
