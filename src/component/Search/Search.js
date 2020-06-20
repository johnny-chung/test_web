import React from 'react';
import { Link , withRouter} from 'react-router-dom';
import './Search.css';

class Search extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            term: ''
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event) {
        const term = event.target.value;
        this.setState( {term: term});
    }

    handleSearch (event) {
        this.props.xpressGetItems(this.state.term, "search");
        //event.preventDefault();       
    }

    render () {
        return (
            <div className = "search-bar">
                <div className = "search-input">
                    <input placeholder = "searching for..." 
                    onChange = {this.handleTermChange}/>
                </div>
                <div className = "submit-button">
                <Link to = {`/search/${this.state.term}`}>
                    <button type ="button" onClick = {this.handleSearch}>
                        Let's search
                    </button>
                </Link>                   
                   
                </div>
            </div>


        )
    }


}

export default withRouter(Search);