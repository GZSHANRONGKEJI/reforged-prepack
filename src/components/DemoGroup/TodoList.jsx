import React, { Component, PropTypes } from 'react';
import Box from '../FlexboxGrid/Box.jsx';
import TableX from '../MaterialUITable/TableX.jsx';

class TodoList extends Component {

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
                    <TableX fixedHeader={ true }
                            fixedFooter={ true }
                            stripedRows={ false }
                            showRowHover={ false }
                            selectable={ true }
                            multiSelectable={ true }
                            enableSelectAll={ true }
                            deselectOnClickaway={ true }
                            height="300px" />
                </Box>
            );
    }
}

export default TodoList;
