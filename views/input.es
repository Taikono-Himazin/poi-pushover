import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

class TokenInput extends Component {
    render = () => {
        return (
            <Form.Group>
                <Form.Label for={this.props.name}>{this.props.label} {this.props.required ? '' : '(オプション)'}</Form.Label>
                <Form.Control
                    name={this.props.name}
                    required={this.props.required}
                    placeholder={this.props.required ? '' : 'オプション'}
                    onChange={this.props.changeHandler}
                />
            </Form.Group>
        )
    }
}
TokenInput.defaultProps = {
    required: true
};

export { TokenInput }