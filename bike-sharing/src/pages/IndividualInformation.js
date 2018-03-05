import React, { Component } from 'react';
import {Avatar,Rate} from 'antd'
import '../css/IndividualInformation.css'

class IndividualInformation extends Component{
    constructor(){
        super();
        this.state = {
            value: 0,
        }
    }

    componentDidMount(){

    }

    handleChange = (value) => {
        this.setState({ value });
    }

    render(){
        let value=this.state.value;
        return (
            <div className={'IndividualTotal'}>
                <label>头像</label>
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" /><br/>
                <label>用户名：User</label><br/>
                <label>账户余额：1234657</label><br/>
                <label>历史记录</label><br/>
                <label>评分</label>
                <span>
                    <Rate onChange={this.handleChange} value={value} />
                    {value && <span className="ant-rate-text">{value} stars</span>}
                </span>
            </div>
        );
    }
}

export default IndividualInformation;