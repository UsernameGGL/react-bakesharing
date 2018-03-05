import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value,
            propertyName:props.propertyName,
            className:props.className,
            onClick:props.onClick
        }
    }

    render=()=>{
        return (
            <button {...this.props} value={this.state.value} name={this.state.propertyName} className={this.state.className} onClick={this.state.onClick}>
                {this.state.value}
            </button>
        )
    }
}


export default Button