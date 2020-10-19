/*
@ The FormComponent is a common functional form reusable component.
*/

import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col, Row } from 'react-bootstrap';

class FormComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
          <form onSubmit={this.props.onSubmit}>
            <FormGroup>
            <Row>
              <Col md={12}>
              <ControlLabel name="title">Title</ControlLabel>
              <FormControl type="text" name="title" onChange={this.props.onChange} value={this.props.title} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
              <ControlLabel name="body">Title</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" name="body" onChange={this.props.onChange} value={this.props.body} />
              </Col>
            </Row>
              <Row>
                <Col md={12}>
                <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </FormGroup>
          </form>
    )
  }
}
export default FormComponent;