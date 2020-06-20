import React from 'react';
import './Item.css';

import {withRouter, Link} from 'react-router-dom';

class Item extends React.Component {
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick () {
        this.props.changeCurrentProduct(this.props.item)
    }

    render () {
        return (
            <div className = "item">
                <Link to = {`/product/${this.props.item.id}`}  >
                    <div className = "item-container" onClick = {this.handleClick}>
                        <div className = "image-container">
                            <img src = {this.props.item.imgSrc} />
                        </div>
                        <h3>{this.props.item.name}</h3>
                        <div className = 'item-rating'>
                            <p>{`Rating: ${this.props.item.rating} stars`}</p>
                        </div>
                        <div className = "item-price">
                            <p>{`$${this.props.item.price}`}</p>
                        </div>
                    </div>
                </Link>
                
            </div>
        )
        
    }
}

export default withRouter(Item);