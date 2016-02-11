
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import { RaisedButton } from 'material-ui';
import { TextField } from 'material-ui';
import TableX from '../components/MaterialUITable/TableX.jsx';


class Default extends Component {

    render() {
        return (
            <div>
                <div params={ this.props.params }>
                    <Row className="row center-xs" params={ this.props.params }>
                        <Col className="col-xs-6" params={ this.props.params }>
                        <Box params={ this.props.params }>
                            <TextField hintText="Hint text" params={ this.props.params }></TextField>
                            <RaisedButton label="Default"
                                          primary={ true }
                                          disabled={ false }
                                          params={ this.props.params }></RaisedButton>
                        </Box>
                        <Box params={ this.props.params }>
                            <TableX fixedHeader={ true }
                                    fixedFooter={ true }
                                    stripedRows={ false }
                                    showRowHover={ false }
                                    selectable={ true }
                                    multiSelectable={ true }
                                    enableSelectAll={ true }
                                    deselectOnClickaway={ true }
                                    height="300px"
                                    params={ this.props.params }></TableX>
                        </Box>
                        </Col>
                    </Row>
                </div>
            </div>
            );
    }
}

export default Default;

