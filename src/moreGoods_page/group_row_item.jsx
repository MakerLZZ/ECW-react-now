import React, {Component} from 'react';
import './group_row_item.css'
import PropTypes from 'prop-types'
class GroupRowItem extends Component {
    
    static propTypes = {
        handleConditionClick:PropTypes.func
    }

    render() {
        return (
            <a className="item" 
                onClick={()=>this.props.handleConditionClick(this.props.classifyName+this.props.text,this.props.groupRowId)}
                >
                <span className="text">{this.props.text}</span>
                {this.props.children}
            </a>
        );
    }
};

export default GroupRowItem;