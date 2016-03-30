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
    this.props.addCompany(form);
    this.props.resetForm();
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
              <h1>Cool Companies</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                {
                  this.props.companies.map((company) => {
                    return (
                      <div key={company.name}>
                        {company.name}
                      </div>
                    );
                  })
                }
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

export default reduxForm({
  form: 'companies',
  fields: ['name']
}, mapStateToProps, {getCompanies,addCompany})(Companies);
