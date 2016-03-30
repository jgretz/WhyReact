import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid,Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap';

import {SelfBindingComponent} from '../support';
import {getCompanies} from '../actions';

class Companies extends SelfBindingComponent {
  componentWillMount() {
    this.props.getCompanies();
  }

  renderCompanies() {
    return this.props.companies.map((company) => {
      return (
        <div key={company.name}>
          {company.name}
        </div>
      );
    });
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Cool Companies</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                {this.renderCompanies()}
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  };
};

export default connect(mapStateToProps, {getCompanies})(Companies);
