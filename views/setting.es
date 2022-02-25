import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PLUGIN_NAME } from '../utils'

import Form from 'react-bootstrap/Form';
import { TokenInput } from './input';
import { changeAppToken, changeUserToken } from '../reducer/actions/actions'

class SettingsClass extends Component {
    render() {
        const { AppToken, changeAppToken, changeUserToken} = this.props;
        return (
            <Form>
                <label>{AppToken}</label>
                <TokenInput label={'App トークン'} name={`plugin.${PLUGIN_NAME}.app_token`} changeHandler={(event) => { changeAppToken(event.target.value) }} />
                <TokenInput label={'User トークン'} name={`plugin.${PLUGIN_NAME}.user_token`} required={false} changeHandler={(event) => { changeUserToken(event.target.value) }} />
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        AppToken: state.AppToken
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeAppToken, changeUserToken }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsClass);