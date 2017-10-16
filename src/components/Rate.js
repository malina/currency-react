import React from 'react';

import { Card, Button, Statistic } from 'semantic-ui-react'

const Rate = ({rate}) => {

  return (
    <Card>
      <Card.Content extra>
        <Card.Header>{rate.Name}</Card.Header>
        <Card.Meta>{rate.Date} at {rate.Time}</Card.Meta>
        <Card.Description>
          <Statistic value={rate.Ask} label='Ask' size='mini' color='blue'/>
          <Statistic value={rate.Bid} label='Bid' size='mini' color='blue'/>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Rate;
