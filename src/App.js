import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrenciesList from './components/CurrenciesList';
import Rates from './components/Rates';
import * as add_action from './actions/addCurrencyAction';
import * as get_rates_action from './actions/getRatesAction';
import { Segment, Container } from 'semantic-ui-react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class App extends Component {
  render() {
    return (
      <Segment className="App">
        <CurrenciesList/>
        <Rates/>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},get_rates_action, add_action), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
