import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as get_rates_action from '../actions/getRatesAction';
import { Card, Button, Container, Segment } from 'semantic-ui-react'
import Rate from './Rate';

class Rates extends Component {
  componentDidMount() {
    if (this.props.rates.length === 0) {
      this.props.actions.getRates();
    }

    this.interval = setInterval(() => {
      this.props.actions.getRates();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container>
        <Segment>
          <Button positive onClick={this.props.actions.getRates}>Update</Button>
        </Segment>
        <Card.Group>
          {this.props.rates.map((rate, i) => {
            return (
              <Rate key={i} rate={rate}/>
            )
          })}
        </Card.Group>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    rates: state.rates
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(get_rates_action, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rates);
