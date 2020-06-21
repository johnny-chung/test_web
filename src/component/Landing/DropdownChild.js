import React from 'react';
import './DropdownChild.css'
import {Link} from 'react-router-dom';

class DropdownChild extends React.Component {
    constructor (props) {
        super (props);
        this.renderDropdownChild = this.renderDropdownChild.bind(this);
        this.renderSubList = this.renderSubList.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

    }

   
    handleMouseLeave () {
        this.props.handleMouseLeave();
    }
    
    renderDropdownChild () {
        return Object.keys (this.props.subCategories).map(subCat1 => {
            let subCat2List = this.props.subCategories[subCat1];
            return (
                <div className = "sub-cat-list">
                    <div className = "sub-cat-1">
                        <Link to = {`/c/${this.props.category}/${subCat1}`}>
                            {subCat1}
                        </Link>
                    </div>                    
                    {this.renderSubList(subCat1, subCat2List)}
                </div>
            )
        })             
          
    }

    renderSubList (subCat1, subCat2List) {
        return subCat2List.map (subCat2 => {
            return (
                <div className =  "sub-cat-2" >
                     <Link to = {`/c/${this.props.category}/${subCat1}/${subCat2}`} >                    
                        {subCat2}
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