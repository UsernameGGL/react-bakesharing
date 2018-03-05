import React, {Component} from 'react';
import Input from "./component/Input";
let str = 'q2321231'
class App extends Component {

    clickHandle(e){
        e.preventDefault();
        str = 'asdaddasadaddasaddsadsdsdsa';
        this.setState({
            asda: this.state.asda
        })
        // this.setState({
        //     inner: this.state.inner.split('').reverse().join('')
        // })
    }
    constructor(){
        super();
        this.state = {
            inner: '123456789',
            asda: ''
        }
    }
    componentDidMount(){
        // setInterval((e) =>{
        //     this.setState({
        //         inner: this.state.inner.split('').reverse().join('')
        //     })
        // },1000)
    }
    click(e) {
        console.log(str)
    }
    render() {
        return (
            <div className="App">
                <Input/>
                <p onClick={this.clickHandle.bind(this)}>{this.state.inner+','+str}</p>
                <button onClick={this.click.bind(this)}></button>
            </div>
        );
    }
}

export default App;
