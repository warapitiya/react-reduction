/**
 * Created by warapitiya on 2019-05-07.
 */

import React, { useEffect } from 'react';
import { CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { loadStockMetadata } from '../store/actions/search.actions';
import loading from 'assets/img/loading.gif';

function StockMetaData({ symbol, description, isLoaded, onMetadataLoad }) {

  // component did mount
  useEffect(() => {
    onMetadataLoad(symbol);
  }, []);

  const getPreloader = () => {
    return (<img width={50} src={loading} alt=""/>);
  };

  const getMeta = () => {
    return (<CardText>{description}</CardText>);
  };

  return isLoaded ? getMeta() : getPreloader(description);
}

function mapDispatchToProps(dispatch) {
  return {
    onMetadataLoad: (value) => dispatch(loadStockMetadata(value)),
  };
}


export default connect(null, mapDispatchToProps)(StockMetaData);
