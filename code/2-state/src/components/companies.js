import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Grid,Row,Col,Button,Input,ListGroup,ListGroupItem} from 'react-bootstrap';

import {SelfBindingComponent} from '../support';
import {getCompanies,addCompany} from '../actions';

class Companies extends SelfBindingComponent {
  componentWillMount() {
    this.props.getCompanies();
  }

  addCompany(form) {
    if (form.name.length == 0) {
      return;
    }

    this.props.addCompany(form);
    this.props.resetForm();
  }

  renderCompanies() {
    return this.props.companies
    .filter(c => !c.name.startsWith('x'))
    .map((company) => {
      return (
        <ListGroupItem key={company.name}>
          {company.name}
        </ListGroupItem>
      );
    });
  }

  render() {
    const { handleSubmit, fields: { name } } = this.props;

    return (
        <Grid>
          <Row>
            <Col xs={12}>
              <form onSubmit={handleSubmit(this.addCompany)}>
                <Input
                  {...name}

                  type="text"
                  placeholder="Enter a cool company"

                  groupClassName="group-class"
                  labelClassName="label-class"
                />
                <Button bsStyle="primary" className="pull-right" type="submit">Add</Button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h1>Cool Companies in PGH</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ListGroup>
                {this.renderCompanies()}
              </ListGroup>
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

export default reduxForm({
  form: 'companies',
  fields: ['name']
}, mapStateToProps, {getCompanies,addCompany})(Companies);
