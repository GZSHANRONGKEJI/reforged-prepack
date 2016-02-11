import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import Box from '../FlexboxGrid/Box.jsx';

class TodoForm extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    handleOnChange() {
    }

    render() {
        return (<Box {...this.props}>
                    <TextField hintText="Hint text" />
                    <RaisedButton label="Default"
                                  primary={ true }
                                  disabled={ false } />
                </Box>
            );
    }
}

export default TodoForm;
