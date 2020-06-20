import React from 'react';
import './Landing.css';

//import DropdownParent from './DropdownParent';
import DropdownChild from './DropdownChild';

class Landing extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            categories: ["Camp & Hike", "Climb"],
            "Camp & Hike": {
                "Backpacks & bags": ["Backpacking Packs", "Daypacks"], 
                "Tents & Shelters": ["Backpacking Tent", "Bivy"]
            },
            "Climb": {
                "Alpine": ["Ice Axe", "Crampons"],
                "Climbing Harnesses": ["Harnesses"]
            },
            currentSelect: "Camp & Hike",
        }

        this.renderDropdownParent = this.renderDropdownParent.bind (this);
        this.handleMouseOver = this.handleMouseOver.bind (this);
        this.handleMouseLeave = this.handleMouseLeave.bind (this);
        this.handleCurrentPathChange = this.handleCurrentPathChange.bind(this);

    }

    handleMouseOver (currentSelect) {
        document.getElementById("dropdown-child").style.visibility = "visible";
        this.setState ( {currentSelect: currentSelect});
        

    }

    handleMouseLeave () {
        document.getElementById("dropdown-child").style.visibility = "hidden";
    }

    handleCurrentPathChange (pathFromChild) {
        let tempPath = {category: this.state.currentSelect};
        if (pathFromChild.subcat1) {
            tempPath.subcat1 = pathFromChild.subcat1;
            //alert (tempPath.subcat1);

        }
        if (pathFromChild.subcat2) {
            tempPath.subcat2 = pathFromChild.subcat2;
            //alert (tempPath.subcat2);
        }
        
        this.props.changeCurrentPath(tempPath)

    }

    renderDropdownParent () {
        return (this.state.categories.map (category => {
                return (
                    <div className = "dropdown-parent-indvidual"
                        onMouseOver = {() => this.handleMouseOver(category)}> 
                        <p>{category}</p> 
                    </div>
                )
            })
        )
    } 


    render () {
        return (
            <div className = "landing">
                <div className = "dropdown-parent-list">
                    {this.renderDropdownParent()}
                </div>                
                <div className = "dropdown-child" >
                    <DropdownChild
                    subCategories = {this.state[this.state.currentSelect]} 
                    xpressGetItems = {this.props.xpressGetItems} 
                    handleMouseLeave = {this.handleMouseLeave} 
                    handleCurrentPathChange = {this.handleCurrentPathChange} />  

                </div>
                
            </div>
        )
    }
}

export default Landing;