import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

import CompanyAddForm from  './company_add_form';
import CompanyList from  './company_list';

const companies = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <CompanyAddForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h1>Cool Companies in PGH</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CompanyList />
        </Col>
      </Row>
    </Grid>
  );
};

export default companies;
