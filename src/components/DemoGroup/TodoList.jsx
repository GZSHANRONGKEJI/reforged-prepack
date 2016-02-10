import React, { Component, PropTypes } from 'react';
import { FontIcon, List, ListItem } from 'material-ui';

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
        const {text} = this.props;
        return (<List {...this.props}
                      ref="todoList">
                    <ListItem primaryText={ text }
                              leftIcon={ <FontIcon className="fa fa-check" /> } />
                </List>
            );
    }
}
TodoList.defaultProps = {
    text: 'Inbox'
};
TodoList.propTypes = {
    text: PropTypes.string
};

export default TodoList;
