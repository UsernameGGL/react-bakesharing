import React, {Component} from 'react';
import Pagination from 'antd/lib/pagination';
import '../css/BikeList.css'
import Bike from './Bike'
import BusBike from "../images/bike/BusBike.jpg"
import MountBike from "../images/bike/MountBike.jpg"
import FlatBike from "../images/bike/FlatBike.jpg"
import HorseBike from "../images/bike/HorseBike.jpg"
import RestBike from "../images/bike/RestBike.jpg"
import TourBike from "../images/bike/TourBike.JPEG"
import E_Bike from "../images/bike/E-Bike.jpg"
import FoldBike from "../images/bike/FoldBike.jpg"
import GravelBike from "../images/bike/GravelBike.jpg"
import { Input,Icon } from 'antd';


class BikeList extends Component{
    constructor(props){
        super(props);
        this.types=props.types===undefined?[]:props.types;
        this.state={
            types:props.types===undefined?[]:props.types,
            names:['公路车','山地车','平把公路车','山马车','城市休闲车','旅行车','E-Bike','折叠自行车','Gravel Bike'],
            descriptions_one:['老司机专用车','老司机专用车','老司机专用车','老司机专用车','老司机专用车','老司机专用车','老司机专用车','老司机专用车','老司机专用车'],
            descriptions_two:['非常好用','非常好用','非常好用','非常好用','非常好用','非常好用','非常好用','非常好用','非常好用'],
            presentPrices:['每小时2元','每小时2元','每小时2元','每小时2元','每小时2元','每小时2元','每小时2元','每小时2元','每小时2元'],
            lastPrices:['每小时5元','每小时5元','每小时5元','每小时5元','每小时5元','每小时5元','每小时5元','每小时5元','每小时5元'],
            imageUrls:[BusBike, MountBike, FlatBike, HorseBike, RestBike, TourBike, E_Bike,FoldBike , GravelBike]
        };
        var k=0;
        let bikesDis=[];
        for (let i of this.state.types){
            bikesDis[k++]=<Bike name={this.state.names[i]} description_one={this.state.descriptions_one[i]} description_two={this.state.descriptions_two[i]}
                                    presentPrice={this.state.presentPrices[i]}  lastPrice={this.state.lastPrices[i]} imageUrl={this.state.imageUrls[i]}
                                    onTransfer={this.onTransfer}/>;
        }
        this.bikeDis=bikesDis;
        this.onTransfer=props.onTransfer;
    }

    pageNumberChange=(page,pageSize)=>{
        let xmlhttp;
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState===4 && xmlhttp.status===200)
            {
                let respTest=eval('('+xmlhttp.responseText+')');
            }
        }
        xmlhttp.open("POST","#",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("page="+page+"pageSize="+pageSize);
    }

    render=()=>{
        return (
            <div className="bike_feature">
                <div className="menubike">
                    <div className="more" id="11">
                        <Input.Search prefix={<Icon type="search" />} enterButton={true} className={"address"}/>
                        <a>查看全部>></a>
                    </div>
                    <ul>
                        <li className="hover">附近单车</li>
                    </ul>
                </div>
                <div>
                    {this.bikeDis}
                </div>
                <div className={'pagination'}>
                    <Pagination total={500} showQuickJumper={true} pageSize={5} size={'big'} />
                </div>
            </div>
        );
    }
}

export default BikeList;