
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import { RaisedButton } from 'material-ui';
import { TextField } from 'material-ui';
import TodoList from '../components/DemoGroup/TodoList.jsx';


class Default extends Component {

    render() {
        return (
            <div>
                <div params={ this.props.params }>
                    <span params={ this.props.params }>
                    <TextField hintText="Enter TODO Item" params={ this.props.params }>
                    </TextField><RaisedButton label="Add Item"
                                                                                                                                                  primary={ true }
                                                                                                                                                  disabled={ false }
                                                                                                                                                  params={ this.props.params }></RaisedButton><TodoList params={ this.props.params }></TodoList></span>
                </div>
            </div>
            );
    }
}

export default Default;
