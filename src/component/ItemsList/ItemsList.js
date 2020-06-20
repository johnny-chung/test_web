import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './ItemsList.css';

import CurrentPath from '../CurrentPath/CurrentPath';
import Item from '../Item/Item';
class ItemsList extends React.Component {
    render () {
        return (
            <div className = "items-list-page">
                <CurrentPath 
                    currentPath = {this.props.currentPath} />
                <div className = "items-list">
                    {this.props.items.map (item => {
                        return (
                            <Item 
                                key = {item.id}
                                item = {item} 
                                changeCurrentProduct = {this.props.changeCurrentProduct} />
                            )
                    })}
                </div>
                
            </div>
        )
    }
}

export default withRouter(ItemsList);