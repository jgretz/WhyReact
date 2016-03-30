import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Button,Input} from 'react-bootstrap';

import {SelfBindingComponent} from '../support';
import {addCompany} from '../actions';

class CompanyAddForm extends SelfBindingComponent {
  addCompany(form) {
    if (form.name.length == 0) {
      return;
    }

    this.props.addCompany(form);
    this.props.resetForm();
  }

  render() {
    const { handleSubmit, fields: { name } } = this.props;

    return (
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
    );
  }
}

export default reduxForm({
  form: 'companies',
  fields: ['name']
}, null, {addCompany})(CompanyAddForm);
