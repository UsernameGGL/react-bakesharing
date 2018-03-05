import React, {Component} from 'react';
import Input from "./component/Input";
import List from './component/List'
import Button from "./component/Button";
import './removed.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: <Input id='input'/>,
            button: <Button value={'add'} onClick={this.add.bind(this)}/>,
            list_left: new Set(),
            list_mid: new Set(),
            list_right: new Array()
        }
    }

    del = (e) => {
        this.state.list_left.delete(e.target.innerHTML);
        this.state.list_mid.add(e.target.innerHTML);
        let elts = document.getElementsByClassName(e.target.innerHTML);
        elts[0].className = 'removed';
        this.setState({});
    }

    add = () => {
        let input = document.getElementById('input');
        if (this.state.list_right.indexOf(input.value) < 0) {
            this.state.list_left.add(input.value);
            this.state.list_right[this.state.list_right.length] = (input.value);
        }
        this.setState({});
    }


    render() {
        return (
            <div>
                {this.state.input}
                {this.state.button}
                <br></br>
                <div className={'inline'}>

                    <ul className='left'>
                        <p>未完成</p>
                        {
                            [...this.state.list_left].map(item => {
                                return <li onClick={this.del}>{item}</li>
                            })
                        }
                    </ul>

                    <ul className='mid'>
                        <p>已完成</p>
                        {
                            [...this.state.list_mid].map(item => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>

                    <ul className='right'>
                        <p>全部情况</p>
                        {
                            [...this.state.list_right].map(item => {
                                return <li className={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
