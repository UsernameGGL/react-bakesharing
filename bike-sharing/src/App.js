import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main'
import './css/BikeList.css'
import Administrator from "./pages/Administrator";
import IndividualInformation from "./pages/IndividualInformation";

class App extends Component {
    constructor(){
        super();
        this.state={
            presentPage:<Main/>,
            loginStatus:<div className={"login"}>
                            <a onClick={this.handleRegister.bind(this)}>注册</a>|<a onClick={this.handleLogin.bind(this)}>登录</a>
                        </div>
        };
    }

    handleRegister=()=>{
        this.setState({
            presentPage:<IndividualInformation />,
            loginStatus:<div className={"login"}>欢迎</div>
        });
    }

    handleLogin=()=>{
        this.setState({
            presentPage:<Administrator/>,
            loginStatus:<div className={"login"}>欢迎</div>
        });
    }

    render=()=>{
        return (
            <div>
                <div className={'greybackground'}>
                    <div className={"bike_feature"}>
                            {this.state.loginStatus}
                    </div>
                </div>
                {this.state.presentPage}
            </div>
            );
    }
}

export default App;
