import React from 'react';
import './DropdownChild.css'
import {Link} from 'react-router-dom';

class DropdownChild extends React.Component {
    constructor (props) {
        super (props);
        this.renderDropdownChild = this.renderDropdownChild.bind(this);
        this.renderSubList = this.renderSubList.bind(this);
        this.handleClickSubcat = this.handleClickSubcat.bind(this);        
        this.handleClickSubcat2 = this.handleClickSubcat2.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

    }

    handleClickSubcat (subcat) {
        //alert(subcat);
        this.props.xpressGetItems(subcat, "sc");
        this.props.handleCurrentPathChange( {subcat1: subcat} )
        
    }
    

    handleClickSubcat2 (subcat1, subcat2) {
        //alert(subcat2);
        this.props.xpressGetItems(subcat2, "sc2");
        this.props.handleCurrentPathChange( {subcat1: subcat1, subcat2: subcat2} )
        
    }

    handleMouseLeave () {
        this.props.handleMouseLeave();
    }
    
    renderDropdownChild () {
        return Object.keys (this.props.subCategories).map(subCategory => {
            let subcat2List = this.props.subCategories[subCategory];
            return (
                <div className = "sub-cat-list">
                    <div className = "sub-cat-1">
                        <Link to = {`/sc/${subCategory}`}>
                            <a onClick = {() => this.handleClickSubcat(subCategory)}>{subCategory}</a>
                        </Link>
                    </div>                    
                    {this.renderSubList(subcat2List, subCategory)}
                </div>
            )
        })             
          
    }

    renderSubList (subcat2List, subcat1) {
        return subcat2List.map (subcat2 => {
            return (
                <div className =  "sub-cat-2" >
                     <Link to = {`/sc2/${subcat2}`} >                    
                        <a onClick = {() => this.handleClickSubcat2(subcat1, subcat2)}>{subcat2}</a>
                    </Link>
                </div>
               
            )
        })
    }

    render () {
        return (
            <div id= "dropdown-child" 
                onMouseLeave = {this.handleMouseLeave}>
                {this.renderDropdownChild()}
            </div>
        )
    }
}

export default DropdownChild;