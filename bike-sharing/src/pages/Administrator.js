import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import '../css/Administrator.css'
import Table from 'antd/lib/table'
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Administrator extends Component{
    constructor(){
        super();
        this.config_1={
            title: {
                text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
            },
            subtitle: {
                text: '数据来源：thesolarfoundation.com'
            },
            yAxis: {
                title: {
                    text: '就业人数'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            series: [{
                name: '安装，实施人员',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: '工人',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: '销售',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: '项目开发',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: '其他',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        };

        this.dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        },  {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }];

        this.columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }];

        this.state = {
            mode: 'inline', //垂直导航菜单的模式
            theme: 'light', //垂直导航菜单的主题
            current: 'mail',    //顶部导航菜单的？？？
        }
    }

    componentDidMount(){

    }

    handleClick = (e) => {      //顶部导航菜单所需方法
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    changeMode = (value) => {   //垂直导航菜单改变模式的方法
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    }
    changeTheme = (value) => {  //垂直导航菜单改变主题的方法
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    render(){
        return (
            <div>
                <div className={'horizontalNavigation'}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Icon type="mail" />Navigation One
                        </Menu.Item>
                        <Menu.Item key="app" disabled>
                            <Icon type="appstore" />Navigation Two
                        </Menu.Item>
                        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={'verticalNavigation'}>
                    <Switch onChange={this.changeMode} /> Change Mode
                    <span className="ant-divider" style={{ margin: '0 1em' }} />
                    <Switch onChange={this.changeTheme} /> Change Theme
                    <br />
                    <br />
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={this.state.mode}
                        theme={this.state.theme}
                    >
                        <Menu.Item key="1">
                            <Icon type="mail" />
                            Navigation One
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="calendar" />
                            Navigation Two
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                            <SubMenu key="sub1-2" title="Submenu">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>



                <div className={'totalWidth'}>
                    <div className={'highBlock'}>
                        <div className={'reactHighcharts'}>
                            <ReactHighcharts config={this.config_1}/>
                        </div>
                        <div className={'reactHighcharts'}>
                            <ReactHighcharts config={this.config_1}/>
                        </div>
                        <div className={'reactHighcharts'}>
                            <ReactHighcharts config={this.config_1}/>
                        </div>
                        <div className={'reactHighcharts'}>
                            <ReactHighcharts config={this.config_1}/>
                        </div>
                    </div>
                    <Table dataSource={this.dataSource} columns={this.columns} />
                </div>
            </div>

        );
    }

}


export default Administrator;