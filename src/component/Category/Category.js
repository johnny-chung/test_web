import React from 'react';

import Xpress from '../../utils/Xpress';

import CurrentPath from '../CurrentPath/CurrentPath';
import ItemsList from '../ItemsList/ItemsList';

class Category extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            xpressGetResults: [],
            cat: '',
            subCat1: '',
            subCat2: ''
        }
    }

    componentDidMount() {
        //alert("component did mount")
        const cat = JSON.parse(JSON.stringify(this.props.match.params.cat))
        this.setState({
            cat: cat
        })
        
        //alert(this.props.match.params.cat)
        //alert(this.state.cat)
        //alert(this.props.match.params.subCat1)
        //alert(this.props.match.params.subCat2)
        
        if (this.state.subCat2) {
            /*
            this.setState({
                subCat1: this.props.match.params.subCat1,
                subCat2: this.props.match.params.subCat2
            })
            */
           
            Xpress.getItems(this.state.subCat2, "sc2").then(results => {
                this.setState ({xpressGetResults: results})
            })

        } else if (this.state.subCat1) {
            /*
            this.setState({
                subCat1: this.props.match.params.subCat1
            })
            */

            Xpress.getItems(this.state.subCat1, "sc").then(results => {
                this.setState ({xpressGetResults: results})
            })       
        } else {            
            Xpress.getItems(this.state.cat, "c").then(results => {
                this.setState ({xpressGetResults: results})
            }) 
        }
        
        //alert(this.state.subCat2)
        //alert(this.xpressGetResults)
    }

    displayState() {
        return (
            alert (this.state.cat)
        )        
    }

    render () {
        return (
            <div className = "category-view">
                {this.displayState()}
                <CurrentPath 
                    cat = {this.state.cat} 
                    subCat1 = {this.state.subCa1}
                    subCat2 = {this.state.subCat2} />
                <ItemsList 
                    items = {this.state.xpressGetResults} />
            </div>
        )
    }



};

export default Category;