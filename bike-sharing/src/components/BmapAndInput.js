import React from 'react';
import {Map} from 'react-bmap'
import Component from 'react-bmap'

class BmapAndInput extends Component {

    constructor() {
        super();
        this.searchStyle = {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#C0C0C0',
            width: 150,
            height: 'auto',
            display: 'none'
        }
    }


    componentDidMount(){
        /*// 创建Map实例
        var options = this.options;
        options = this.getOptions(options);
        if (this.props.enableMapClick !== true) {
            options.enableMapClick = false;
        }
        var map = new BMap.Map(this.refs.map, options);

        this.map = map;*/

        <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=3WyF6kCK9MXx3jwb7nTavHmzjjFV1G5p"></script>
        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }

        var map = new BMap.Map("l-map");
        map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。

        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {"input" : "suggestId"
                ,"location" : map
            });

        ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

            setPlace();
        });

        function setPlace(){
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun(){
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                map.centerAndZoom(pp, 18);
                map.addOverlay(new BMap.Marker(pp));    //添加标注
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            local.search(myValue);
        }
    }

    render = () => {
        return(
            <div>

                <div id="l-map"></div>
                <div id="r-result">请输入:<input type="text" id="suggestId" size="20" value="百度" style={{width:150}} /></div>
                <div id="searchResultPanel" style={{width:150,height:auto, display:none}}></div>

            </div>
        );
    }
}

export default BmapAndInput;