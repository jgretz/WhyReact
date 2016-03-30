import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const companyListItem = ({company}) => {
  return (
    <ListGroupItem key={company.name}>
      {company.name}
    </ListGroupItem>
  );
};

export default companyListItem;
