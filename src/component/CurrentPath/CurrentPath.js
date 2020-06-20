import React from 'react';
import {Link} from 'react-router-dom';


class CurrentPath extends React.Component {
    constructor (props) {
        super(props)
        this.renderHome = this.renderHome.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
        this.renderSubcat1 = this.renderSubcat1.bind(this);
        this.renderSubcat2 = this.renderSubcat2.bind(this);
    }

    renderHome () {
        return (
            
                <Link to = '/'> Home </Link>
            
            
        )
    };

    renderCategory () {
        return (
            <Link to = {`/c/${this.props.category}`}> 
                {` > ${this.props.category}`} 
            </Link>
        )
    };

    renderSubcat1 () {
        if (this.props.subcat1 !== '') {
            return (
                <Link to = {`/c/${this.props.category}/${this.props.subcat1}`} >
                    {` > ${this.props.subcat1}`}
                </Link>
            )
        } else {
            return
        }
    };

    renderSubcat2 () {
        if (this.props.subcat2 !== '') {
            return (
                <Link to = {`/c/${this.props.category}/${this.props.subcat1}${this.props.subcat2}`} >
                    {` > ${this.props.subcat2}`}
                </Link>
            ) 
        } else {
            return
        }
    };

    render() {
        return (
            <div className = "current-path">
                {this.renderHome()}
                {this.renderCategory()}
                {this.renderSubcat1()}
                {this.renderSubcat2()}
                
            </div>
        )
    }

}

export default CurrentPath;

//{this.renderCategory()}
                //{this.renderSubcat1()}
               // {this.renderSubcat2()}