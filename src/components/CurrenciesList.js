import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as add_action from '../actions/addCurrencyAction';
import * as get_rates_action from '../actions/getRatesAction';
import {CURRENCIES} from '../constants/currencies';

import { Button, Container, Header, Dropdown, Icon, Label, Divider  } from 'semantic-ui-react';

const CurrenciesList = (props) => {
  const addCurrency = (e, data) => {
    props.actions.addCurrency(data.value).then(()=> {
      props.actions.getRates();
    });
  };

  const removeCurrency = (currency) => {
    props.actions.removeCurrency(currency).then(()=> {
      props.actions.getRates();
    });
  };

  let showDelete = props.currencies.length > 2;

  return (
    <Container>
      <Header as='h2'>Select currency</Header>
      <Dropdown placeholder='Select currency' selection search closeOnChange onChange={addCurrency} options={CURRENCIES}/>
      {props.currencies.map((currency, i) => {
        return (
          <Label key={i}>
            {currency}
            {showDelete ? <Icon name='delete' onClick={() => { removeCurrency(currency) }}/> : ''}
          </Label>
        )
      })}
      <Divider/>
    </Container>
  );
};

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
)(CurrenciesList);
