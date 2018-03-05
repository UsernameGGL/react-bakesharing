import React, {Component} from 'react';
import '../css/BikeList.css'

class Bike extends Component{
    constructor(props){
        super(props);
        this.state={
            name:props.name,
            description_one:props.description_one,
            description_two:props.description_two,
            presentPrice:props.presentPrice,
            lastPrice:props.lastPrice,
            imageUrl:props.imageUrl,

            border:{
                borderWidth:2,
                borderColor:'#f5f5f5',
                borderStyle:'solid'
            }
        };
        this.onTransfer=props.onTransfer;
    }

    handleMouseOver=()=>{
        this.setState({
            border:{
                borderWidth:2,
                borderColor:'red',
                borderStyle:'solid'
            }
        });
    }

    handleMouseOut=()=>{
        this.setState({
            border:{
                borderWidth:2,
                borderColor:'#f5f5f5',
                borderStyle:'solid'
            }
        });
    }

    handleOnClick=()=>{
        let personLocation;
        let destination;
        this.onTransfer(personLocation,destination);
    }

    render=()=>{
        return (
            <div className={"list-infoBox"} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}
            style={this.state.border}>
                <a title={this.state.name} className="" onClick={this.handleOnClick.bind(this)}>
                    <img width="285" height="194" src={this.state.imageUrl} alt={this.state.name} />
                </a>
                <br/>
                    <a  title={this.state.name} onClick={this.handleOnClick.bind(this)}>{this.state.name}</a>
                <br/>
                    <span>{this.state.description_one}</span>
                    <span>|</span>{this.state.description_two}
                    <span className={"distance"}>距离</span>
                <br/>
                    <span> <i> {this.state.presentPrice} </i> </span>
                    <s>{this.state.lastPrice}</s>
                <br/>
            </div>
        );
    }
}

export default Bike;