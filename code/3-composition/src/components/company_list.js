import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';

import {SelfBindingComponent} from '../support';
import {getCompanies} from '../actions';

import CompanyListItem from './company_list_item';

class Companies extends SelfBindingComponent {
  componentWillMount() {
    this.props.getCompanies();
  }

  renderCompanies() {
    return this.props.companies
      .filter(c => !c.name.startsWith('x'))
      .map(c => <CompanyListItem key={c.name} company={c} />);
  }

  render() {
    return (
      <ListGroup>
        {this.renderCompanies()}
      </ListGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  };
};

export default connect(mapStateToProps, {getCompanies})(Companies);
