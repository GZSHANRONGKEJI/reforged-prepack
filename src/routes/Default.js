
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import TodoForm from '../components/DemoGroup/TodoForm.jsx';
import TodoList from '../components/DemoGroup/TodoList.jsx';


class Default extends Component {

    render() {
        return (
            <div>
                <div params={ this.props.params }>
                    <Row className="row center-xs" params={ this.props.params }>
                        <Col className="col-xs-8" params={ this.props.params }>
                          <TodoForm params={ this.props.params }></TodoForm>
                          <TodoList params={ this.props.params }></TodoList>
                        </Col>
                    </Row>
                </div>
            </div>
            );
    }
}

export default Default;
