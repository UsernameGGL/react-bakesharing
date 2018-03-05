import React, {Component} from 'react';
import App from "../App";

class Input extends Component {
    constructor(props){
        super();
        this.state = {
            value : '',
        }
    }
    change(e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
        //console.log(this.state.value)
    }
    render() {
        return (
            <input {...this.props} value={this.state.value} onChange={this.change.bind(this)}/>
        );
    }
}

export default Input;
