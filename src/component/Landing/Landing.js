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

    }

    handleMouseOver (currentSelect) {
        document.getElementById("dropdown-child").style.visibility = "visible";
        this.setState ( {currentSelect: currentSelect});
        

    }

    handleMouseLeave () {
        document.getElementById("dropdown-child").style.visibility = "hidden";
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
                    category = {this.state.currentSelect}
                    subCategories = {this.state[this.state.currentSelect]} 
                    handleMouseLeave = {this.handleMouseLeave}  />  

                </div>
                
            </div>
        )
    }
}

export default Landing;