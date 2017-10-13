import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyExchange from './components/CurrencyExchange';
import * as actions from './actions/addCurrencyAction';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class App extends Component {
  addCurrency() {
    this.props.actions.onAddCurrency(this.addedCurrency.value).then(()=> {
      this.props.actions.getRates();
    });
    //console.log(this.props.currencies);
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <CurrencyExchange/>
        <input type='text' ref={(input) => {this.addedCurrency = input}}/>
        <button onClick={this.addCurrency.bind(this)}> Add </button>
      </div>
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
    actions: bindActionCreators(actions, dispatch),
    addTrack: (name) => {
      dispatch({
        type: 'ADD_CURRENCY',
        payload: name
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
