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
        this.setState({
            cat: this.props.match.params.cat
        })
        if (this.props.match.params.subCat2) {
            this.setState({
                subCat1: this.props.match.params.subCat1,
                subCat2: this.props.match.params.subCat2
            })
            Xpress.getItems(this.state.subCat2, "sc2").then(results => {
                this.setState ({xpressGetResults: results})
            })

        } else if (this.props.match.params.subCat1) {
            this.setState({
                subCat1: this.props.match.params.subCat1
            })
            Xpress.getItems(this.state.subCat1, "sc").then(results => {
                this.setState ({xpressGetResults: results})
            })       
        } else {            
            Xpress.getItems(this.state.cat, "c").then(results => {
                this.setState ({xpressGetResults: results})
            }) 
        }
        
    }

    render () {
        return (
            <div className = "category-view">
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