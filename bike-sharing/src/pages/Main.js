import React, {Component} from 'react';
import '../App.css';
import BikeList from '../components/BikeList'
import '../css/UpTheList.css'
import {Carousel} from 'antd'
import Carousel_1 from '../images/bike/1.jpg'
import Carousel_2 from '../images/bike/2.jpg'
import Carousel_3 from '../images/bike/3.jpg'
import Carousel_4 from '../images/bike/4.jpg'
import WidePicture from '../images/wide_picture.jpg'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikesOrMap: []
        }
    }

    componentDidMount(){
        /*var xmlhttp;
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState===4 && xmlhttp.status===200)
                {
                    let respTest=eval('('+xmlhttp.responseText+')');
                    self.SetState(respTest.types);
                }
            }
            xmlhttp.open("GET","http://localhost:8080/",true);
            xmlhttp.send();*/
        this.setState({
            bikesOrMap: <BikeList types={[0, 1, 2, 3, 4, 5, 6, 7]} onTransfer={this.transferToMap.bind(this)}/>
        });
    }

    transferToMap = (personLocation, destination) => {
        //利用setState绘出步行路线
    }

    render = () => {

        return (
            <div>
                <div className="bike_feature">
                    <img style={{width:1200,marginBottom:50}} src={WidePicture} />
                    <div className={'carousel'}>
                        <Carousel autoplay>
                            <div><img className={'slidePic'} src={Carousel_1}/></div>
                            <div><img className={'slidePic'} src={Carousel_2}/></div>
                            <div><img className={'slidePic'} src={Carousel_3}/></div>
                            <div><img className={'slidePic'} src={Carousel_4}/></div>
                        </Carousel>
                    </div>
                    <div className={'select'}>
                        <div className={'welcome'}>
                            <div className={'margin-out'}>
                                欢迎租车
                            </div>
                        </div>
                        <div className={'types'}>
                            <div className={'margin-out'}>
                                <div className={'margin-inner'}>车型</div>
                                <div className={'type'}>公路</div>
                                <div className={'type'}>山地</div>
                                <div className={'type'}>平把公路</div>
                                <div className={'type'}>山马</div>
                                <div className={'type'}>休闲</div>
                                <div className={'type'}>旅行</div>
                                <div className={'type'}>E-Bik</div>
                                <div className={'type'}>折叠</div>
                                <div className={'type'}>Gravel Bike</div>
                            </div>
                        </div>
                        <div className={'uses'}>
                            <div className={'margin-out'}>
                                <div className={'margin-inner'}>用途</div>
                                <div className={'use'}>自驾游</div>
                                <div className={'use'}>上班</div>
                                <div className={'use'}>上学</div>
                                <div className={'use'}>爬山</div>
                                <div className={'use'}>练习</div>
                                <div className={'use'}>其他</div>
                            </div>
                        </div>
                        <div className={'distances'}>
                            <div className={'margin-out'}>
                                <div className={'margin-inner'}>距您</div>
                                <div className={'dist'}>小于10米</div>
                                <div className={'dist'}>10-50米</div>
                                <div className={'dist'}>50-200米</div>
                                <div className={'dist'}>200-1000米</div>
                                <div className={'dist'}>>1000米</div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.bikesOrMap}
            </div>
        );
    }
}

export default Main;