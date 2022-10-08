import { Component } from "react";

import "./search-panel.css"

class searchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchPhrase: ''
        }
    }

    onChange = (e) => {
        const inputStr = e.target.value;
        this.setState({searchPhrase: inputStr});
        this.props.onUpdateSearch(inputStr);
    }

    render() {
        return (
            <input
            type="text"
            className="form-control search-input"
            placeholder="Search employee by name"  
            value={this.state.searchPhrase}     
            onChange={this.onChange}
            />
        );     
    };
}

export default searchPanel;