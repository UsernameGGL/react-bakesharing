import React, {Component} from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : '',
            id:props.id||'',
            propertyName:props.propertyName||'',
            className:props.className||''
        }
    }

    getValue(){
        return this.state.value;
    }

    change(e) {
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
