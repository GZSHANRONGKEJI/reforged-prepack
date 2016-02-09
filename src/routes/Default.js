
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class Default extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Demo" params={ this.props.params }></DemoAppBar>
            </div>
            );
    }
}

export default Default;

