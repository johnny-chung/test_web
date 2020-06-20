import React from 'react';

class DropdownParent extends React.Component {
    constructor (props) {
        super (props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        this.props.handleMouseOver(this.props.category);
    } 

    render () {
        return (
            <div className = "dropdown-parent-greybox" 
                onMouseOver = {this.handleMouseOver} >
                <h3>{this.props.category}</h3>
            </div>
        )
    }
}

export default DropdownParent;