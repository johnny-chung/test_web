import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    render () {
        return (
        <div className = "Details">
            <div className = "location">
                <p>{`home > ${this.props.product.category} > ${this.props.product.subcat} > ${this.props.product.subcat2}`}</p>
            </div>
            <div className = "product-name">
                <h3>{this.props.product.name}</h3>
            </div>
            
            <div className = "product-img-price-cart">

                <div className = "img-container"> 
                    <img src = {this.props.product.imgSrc} alt = "img"/>
                </div>
            
            
                <div className = "details-right">
                    
                    <p>{`Review: ${this.props.product.rating} stars`}</p>
                    <p className= "price" >{`Price: $${this.props.product.price}`}</p>
                    <button className = "cart-button" type = "button">Add to Cart</button>
                   
                </div>
            </div>
            <hr/>
            <div className = "product-description" >
                
                <p>{`Product information of ${this.props.product.name}`}</p>
                <hr/>
                <p>{this.props.product.description}</p>
            </div>
        </div>
        )
        
    }
}

export default Detail;