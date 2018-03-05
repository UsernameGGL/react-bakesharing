import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            list:new Array(),
            className:props.className||'',
            propertyName:props.propertyName||'',
            id:props.id||'',
            onClick:props.onClick,
        }
        this.add=this.add.bind(this);
    }
    add=(value)=>{
        this.state.list.add(<li>{value}</li>);
        this.setState({});
    }

    del=(e)=>{
        if(this.state.className&&this.state.className=='left'){
            this.state.list.remove(<li>{e.target.value}</li>);
            this.setState({});
        }
    }

    setClass=(value,cls)=>{
        let tmp=<li onClick={this.del}>{value}</li>;
        let index=this.state.list.indexOf(tmp);
        this.state.list[index].className={cls};
    }



    render(){
        let a='';
        for(let v of this.state.list){
            a+={v};
        }
        return(
            <ul>
                {a}
            </ul>
        );
    }
}


export default List;