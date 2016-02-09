
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import { Paper } from 'material-ui';
import { Tabs } from 'material-ui';
import { Tab } from 'material-ui';


class TabsPage extends Component {

    render() {
        return (
            <div>
                <h3 style={ {    padding: '1em',    textAlign: 'center'} } params={ this.props.params }><span params={ this.props.params }>This is an empty page. To add new component select needed element on left-side panel and click on an element on the page where you want to put new component, than choose action for right component's place.</span></h3>
                <Tabs params={ this.props.params }>
                    <Tab label="Tab One" params={ this.props.params }>
                        <Paper style={ {    width: '100px',    height: '100px'} }
                               zDepth={ 4 }
                               rounded={ true }
                               params={ this.props.params }>
                            <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                <span params={ this.props.params }>zDepth: 4</span>
                            </p>
                            <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                <span params={ this.props.params }>rounded: true</span>
                            </p>
                        </Paper>
                    </Tab>
                    <Tab label="Tab One" params={ this.props.params }>
                        <button params={ this.props.params }>
                            <span params={ this.props.params }>Button</span>
                        </button>
                    </Tab>
                </Tabs>
            </div>
            );
    }
}

export default TabsPage;

