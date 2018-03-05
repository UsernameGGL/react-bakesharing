<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>共享单车</title>
    <meta name="keywords" content="互联网,买卖二手车,交易平台,网站模板,全套下载"/>
    <meta name="description" content="互联网买卖二手车交易平台网站模板全套下载。"/>
    <link rel="stylesheet" type="text/css" href="css/base.css"/>
    <link rel="stylesheet" type="text/css" href="css/home.css"/>
    <link rel="stylesheet" type="text/css" href="city/city.css">
    <script type="text/javascript" src="script/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="script/home_ban.js"></script>
    <script type="text/javascript" src="script/eg_top_search.js"></script>
    <script type="text/javascript" src="script/city.js"></script>
    <script type="text/javascript" src="script/snncar.js"></script>
    <script type="text/javascript" src="script/jquery.SuperSlide.2.1.1.js"></script>
    <!--导航登陆网页版下拉-->
    <script type="text/javascript">
        $(function () {
            var setTime;
            $(".egc-top .nav-cent .operate").hover(function () {
                var _this = $(this);
                setTime = setTimeout(function () {
                    _this.find(".sec-version").slideDown(200);
                    _this.find("i").removeClass("icon-angle-down").addClass("icon-angle-up");
                }, 200);
            }, function () {
                if (setTime) {
                    clearTimeout(setTime);
                }
                $(".egc-top .nav-cent .sec-version").slideUp(200);
                $(".egc-top .nav-cent .operate i").removeClass("icon-angle-up").addClass("icon-angle-down");
            });
        });
    </script>

    <!--下拉导航关闭-->
    <script type="text/javascript">
        $(function () {
            $('.menu-mb i').click(function () {
                $(".navigation-mb-list").slideDown(300);
            });
            $('.navigation-mb-list .list-close-btn').click(function () {
                $(".navigation-mb-list").slideUp(300);
            });
        });
    </script>

    <script type="text/javascript">
        $(function () {
            var scroll_heitht = $('body').offset().top;
            var isShow = true;
            $(window).scroll(function () {
                if ($(window).scrollTop() > scroll_heitht && isShow) {
                    $('.stress-search-box').slideDown(200);
                } else {
                    $('.stress-search-box').slideUp(200);
                }
            });
            $('.stress-close a').click(function () {
                isShow = false;
                $('.stress-search-box').slideUp(200).unbind(window, aa);
            });
        });
    </script>
</head>
<body>
<div class="egc-top">
    <div class="nav-cent">
        <div class="top-r"><a href="#" id="b-regist">注册</a>|<a href="#" id="b-login" class="b-login">登陆</a></div>
        <div class="top-l">全国统一客服热线：400-877-9288</div>
        <div class="clear_fix"></div>
    </div>
</div>
<div class="navigation">
    <div class="nav-cent">
        <div class="logo"><a href="index.html"><img src="images/bike/logo.jpg" width="240"/></a></div>
        <div class="city"><span id="DY_site_name" class="red city-name Left">青岛</span>
            <div id="JS_hide_city_menu_11" class="city-select cut_handdler Left"><a href="javascript:void(0);"
                                                                                    class="common-bg selector">切换城市</a>
                <div id="JS_header_city_bar_box" class="hide_city_group">
                    <div class="hideMap">
                        <div class="showPanel clearfix">
                            <div class="Left mycity">
                                <div id="JS_current_city_box"> 当前城市：<strong id="JS_city_current_city">青岛</strong></div>
                                <div id="JS_default_city_delete" style="display: none;"></div>
                            </div>
                        </div>
                        <div class="showPanel showPanel2 clearfix">
                            <div class="hot_city" id="JS_header_city_hot"></div>
                            <div class="city_words mt10" id="JS_header_city_char"></div>
                        </div>
                        <div class="scrollBody">
                            <div class="cityMap clearfix">
                                <table id="JS_header_city_list" class="city_list" style="margin-top: 0px;">
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div class="scrollBar"><span id="JS_header_city_bar" style="margin-top: 0px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <span class="common-bg city-logo"></span></div>
        <div class="sea">
            <div class="egc-sea-box">
                <input type="text" class="sea-ipt-txt" placeholder="搜索您想要的车"/>
                <a href="#" class="search-btn">搜索</a></div>
        </div>
        <div class="hot-phone"><i></i> <span class="js-change-phone">400-877-9288</span></div>
    </div>
</div>
<ul class="navmenu">

</ul>
<div class="clear_fix"></div>
<div class="stress-search-box row">
    <div class="stress-close"><a href="javascript:;"></a></div>
    <div class="nav-cents">
        <ul>
            <li class="logo"><a href="index.html"><img src="images/bike/logo.jpg" width="180"/></a></li>
            <li><a href="#">首页</a></li>
            <li><a href="#">我要租车</a></li>
            <li><a href="#">我要旅行</a></li>
            <li><a href="#">单车联盟</a></li>
            <li><a href="#"></a></li>
        </ul>
        <div class="seas">
            <div class="egc-sea-box">
                <input type="text" class="sea-ipt-txt" placeholder="搜索您想要的车">
                <a href="#" class="search-btn">搜索</a></div>
        </div>
    </div>
</div>
<!--banner广告-->
<div class="banner">
    <!--左侧买卖车-->
    <div class="mainmenu">
        <div class="sel-area">
            <div class="buy-tit">我要租车</div>
            <div class="all-sort-list">
                <div class="items">
                    <h3>
                        <div class="border"><a href="">车型</a></div>
                        <ul>
                            <li><a href="#">公路</a></li>
                            <li><a href="#">山地</a></li>
                            <li><a href="#">平把</a></li>
                            <li><a href="#">山马</a></li>
                            <li><a href="#">休闲</a></li>
                            <li><a href="#">旅行</a></li>
                            <li><a href="#">E-Bike</a></li>
                            <li><a href="#">折叠</a></li>
                            <li><a href="#">Gravel Bike</a></li>
                        </ul>
                    </h3>
                </div>
                <div class="items">
                    <h3>
                        <div class="border"><a href="">价格</a></div>
                        <ul>
                            <li><a href="#">1元以下</a></li>
                            <li><a href="#">1-3元</a></li>
                            <li><a href="#">4-6元</a></li>
                            <li><a href="#">7-9元</a></li>
                            <li><a href="#">10-12元</a></li>
                            <li><a href="#">13-15元</a></li>
                            <li><a href="#">15元以上</a></li>
                        </ul>
                    </h3>
                </div>
                <div class="items">
                    <h3 style="border-bottom:0px;">
                        <div class="border"><a href="">距离</a></div>
                        <ul>
                            <li><a href="#">50米以内</a></li>
                            <li><a href="#">50-100米</a></li>
                            <li><a href="#">100-200米</a></li>
                            <li><a href="#">200-500米</a></li>
                            <li><a href="#">500-1000米</a></li>
                        </ul>
                    </h3>
                </div>
            </div>
            <div class="clear_fix"></div>
            <script type="text/javascript">
                $('.all-sort-list > .item').hover(function () {
                    var eq = $('.all-sort-list >.item').index(this),				//获取当前滑过是第几个元素
                        h = $('.all-sort-list').offset().top,						//获取当前下拉菜单距离窗口多少像素
                        s = $(window).scrollTop(),									//获取游览器滚动了多少高度
                        i = $(this).offset().top,									//当前元素滑过距离窗口多少像素
                        item = $(this).children('.item-list').height(),				//下拉菜单子类内容容器的高度
                        sort = $('.all-sort-list').height();						//父类分类列表容器的高度

                    if (item < sort) {												//如果子类的高度小于父类的高度
                        if (eq == 0) {
                            $(this).children('.item-list').css('top', (i - h));
                        } else {
                            $(this).children('.item-list').css('top', (i - h));
                        }
                    } else {
                        if (s > h) {												//判断子类的显示位置，如果滚动的高度大于所有分类列表容器的高度
                            if (i - s > 0) {											//则 继续判断当前滑过容器的位置 是否有一半超出窗口一半在窗口内显示的Bug,
                                $(this).children('.item-list').css('top', (s - h) + 2);
                            } else {
                                $(this).children('.item-list').css('top', (s - h) - (-(i - s)) + 2);
                            }
                        } else {
                            $(this).children('.item-list').css('top', 0);
                        }
                    }

                    $(this).addClass('hover');
                    $(this).children('.item-list').css('display', 'block');
                }, function () {
                    $(this).removeClass('hover');
                    $(this).children('.item-list').css('display', 'none');
                });

                $('.item > .item-list > .close').click(function () {
                    $(this).parent().parent().removeClass('hover');
                    $(this).parent().hide();
                });
            </script>
            <!--我要买车-->
            <div class="buy-tit">我要租车</div>
            <div class="sell-car-box">
                <form action="" class="clearfix">
                    <input type="text" class="sell-phone-input" data-role="sellPhone" placeholder="请输入单车类型">
                    <button class="sell-phone-submit">我要租车</button>
                </form>
                <!--提交失败-->
                <p class="sell-phone-error" style="display:none;">请填写正确的手机号码</p>
                <!--提交成功-->
                <div class="submit-suc" style="display:none"><i></i>提交成功！ <a href="javascript:void(0)"
                                                                             data-role="go_back">返回</a></div>
            </div>
        </div>
    </div>
    <div class="menu_r">
        <div class="flexslider">
            <ul class="slides">
                <li style="background-image:url(images/1.jpg);"></li>
                <li style="background-image:url(images/2.jpg);"></li>
                <li style="background-image:url(images/3.jpg);"></li>
                <li style="background-image:url(images/4.jpg);"></li>
            </ul>
        </div>
        <div class="clear_fix"></div>
        <div class="purpose">
            <div class="ind-dz-lc">
                <ul>
                    <li>
                        <div class="circle radius"><i class="lc-01"></i></div>
                        <div class="txt">
                            <h4>保证单车质量</h4>
                        </div>
                    </li>
                    <li>
                        <div class="circle radius"><i class="lc-02"></i></div>
                        <div class="txt">
                            <h4>定时检测单车状况</h4>
                        </div>
                    </li>
                    <li>
                        <div class="circle radius"><i class="lc-03"></i></div>
                        <div class="txt">
                            <h4>新用户免费</h4>
                        </div>
                    </li>
                    <li>
                        <div class="circle radius"><i class="lc-04"></i></div>
                        <div class="txt">
                            <h4>100%正规车源</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        $('.flexslider').flexslider({
            directionNav: true,
            pauseOnAction: false
        });
        $('.flexslider').hover(function () {
            $('.flex-direction-nav').fadeIn();
        }, function () {
            $('.flex-direction-nav').fadeOut();
        })
    });
</script>

<!--车类列表-->
<div class="car_feature">
    <div class="menucar">
        <div class="more" id="11"><a href="#">查看全部>></a></div>
        <ul>
            <li class="hover" id="tabs2_0">附近单车</li>
        </ul>
    </div>
    <div class="clear_fix"></div>

    <div class="menucarlist fr">
        <div id="divs2_0">
            <ul class="carList" id="parent">


            </ul>
        </div>
    </div>
    <div class="clear_fix"></div>
    <!--底部-->
    <div class="ftWrap">
        <div class="foot">
            <div class="cent">
                <div class="relate">
                    <div class="items">
                        <div class="tit"><i class="icon-angle-right"></i>租赁帮助</div>
                        <div class="con"><a href="#">查询帮助</a> <a href="#">车型帮助</a></div>
                    </div>
                    <div class="items">
                        <div class="tit"><i class="icon-angle-right"></i>客服中心</div>
                        <div class="con"><a href="#">网站合作</a> <a href="#">关于我们</a> <a href="#">联系我们</a></div>
                    </div>
                    <div class="items">
                        <div class="tit"><i class="icon-angle-right"></i>租赁指南</div>
                        <div class="con"><a href="#">租赁指南</a></div>
                    </div>
                    <div class="app-section"><img class="js-delayed-img" src="images/f_wx.jpg">
                        <div class="title">扫码关注微信</div>
                        <p> 用心骑，随心想<br/>
                            优质一站式共享单车服务平台 </p>
                    </div>
                    <div class="items last">
                        <div class="tel">
                            <h1>400-877-9288</h1>
                            <p>周一至周日 8:00-18:00</p>
                            <p>免费咨询(咨询、建议、投诉)</p>
                            <a href="#" class="kf"><i class="kf-icon"></i>在线客服</a></div>
                        <div class="tel-mb">
                            <p><span>400-710-8886</span>周一至周日 8:00-18:00(仅收市话费)</p>
                            <a href="#" class="kf"><i class="kf-icon"></i>在线客服</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="cent"> Copyright ? 2016-2017, snncar.com,All Rights Reserved 皖ICP备16022456号-1</div>
        </div>
    </div>
    <script type="text/javascript">
        $(function () {
            $('.navmenu li').hover(function () {
                $('span', this).stop().css('height', '2px');
                $('span', this).animate({
                    left: '0',
                    width: '100%',
                    right: '0'
                }, 200);
            }, function () {
                $('span', this).stop().animate({
                    left: '50%',
                    width: '0'
                }, 200);
            });
        });
    </script>
    <script type="text/javascript" src="script/3c-menu.js"></script>

    <script type="text/javascript" src="script/index.js"></script>
    <script type="text/javascript" src="script/address.js"></script>
    <script type="text/javascript" src="script/lg_reg.js"></script>
    <script type="text/javascript">
        $(function () {

            $("#sjld").sjld("#shenfen", "#chengshi");

        });
    </script>
    <!--会员登录和注册弹出框开始-->
    <div id="popBox">
        <div class="popCont"><a class="p_closed">关闭</a>
            <div class="p-tab"><a>会员登录<i></i></a><a>会员注册<i></i></a></div>
            <div class="p-detail">
                <div class="p-dl">
                    <form onsubmit="return check();" enctype="multipart/form-data" method="post" name="form" id="form">
                        <ul class="login-items">
                            <li>
                                <label>用户名(手机号)</label>
                                <input class="input" type="text" value="" maxlength="32" name="username"
                                       placeholder="请输入您的手机号">
                            </li>
                            <li>
                                <label>密码</label>
                                <input class="input" type="password" value="" maxlength="16" name="password">
                            </li>
                        </ul>
                        <div class="login-check">
                            <input type="checkbox" name="checkbox" style=" width:auto;"/>
                            <label>记住我</label>
                            <a href="#">忘记登录密码？</a></div>
                        <div class="login-button">
                            <input type="hidden" value="" name="carid" class="ordercarid"/>
                            <input type="hidden" value="" name="carstatus" class="orderstatus"/>
                            <input type="button" value="登&nbsp;&nbsp;&nbsp;&nbsp;陆" class="fM"
                                   onclick="$('#form').submit()"/>
                        </div>
                        <!---校验-->
                        <p class="sell-phone-error" style="display:none;">请填写正确的手机号码</p>
                    </form>
                </div>
                <div class="p-dl">
                    <form class="registForm" enctype="multipart/form-data" method="post"
                          name="reg" id="reg" onsubmit="regcheck()" action="/registe.do">
                        <ul class="login-items">
                            <li class="clearfix">
                                <input class="input" name="phone" id="phone" type="text" value=""
                                       placeholder="手机号码（登录帐号）">
                            </li>
                            <li class="clearfix">
                                <input class="input" type="text" value="" name="name" placeholder="姓名" id="name">
                            </li>
                            <li class="clearfix sex" >
                                <input type="radio" checked="" name="gender" value="M" id="gender" />
                                男&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="gender" value="F"/>
                                女
                            </li>
                            <li class="clearfix">
                                <input id="password" class="input" type="password" name="password" value=""
                                       placeholder="输入密码（六位字符）">
                            </li>
                        </ul>
                        <div class="login-button">
                            <input type="hidden" value="" name="carid" class="ordercarid"/>
                            <input type="hidden" value="" name="carstatus" class="orderstatus"/>
                            <input type="submit" value="立即注册" class="fM"/>
                        </div>
                        <!---校验-->
                        <p class="sell-phone-error" style="display:none;">请填写正确的手机号码</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--会员登录和注册弹出框结束-->
    <div id="leftsead">
        <ul>
            <li>
                <a id="top_btn">
                    <img src="images/foot03/ll06.png" width="47" height="49" class="hides"/>
                    <img src="images/foot03/l06.png" width="47" height="49" class="shows"/>
                </a>
            </li>

            <li>
                <a href="">
                    <img src="images/foot03/ll03.png" width="47" height="49" class="hides"/>
                    <img src="images/foot03/l03.png" width="47" height="49" class="shows"/>
                </a>
            </li>

            <li>
                <a href="">
                    <img src="images/foot03/ll02.png" width="166" height="49" class="hides"/>
                    <img src="images/foot03/l04.png" width="47" height="49" class="shows"/>
                </a>
            </li>

            <li>
                <a class="youhui">
                    <img src="images/foot03/l02.png" width="47" height="49" class="shows"/>
                    <img src="images/foot03/zfew.jpg" width="196" height="205" class="hides" usemap="#taklhtml"/>
                </a>
            </li>


        </ul>
    </div>
</div>
<!--leftsead end-->

<script type="text/javascript">
    $(document).ready(function () {

        $("#leftsead a").hover(function () {
            if ($(this).prop("className") == "youhui") {
                $(this).children("img.hides").show();
            } else {
                $(this).children("img.hides").show();
                $(this).children("img.shows").hide();
                $(this).children("img.hides").animate({marginRight: '0px'}, 'slow');
            }
        }, function () {
            if ($(this).prop("className") == "youhui") {
                $(this).children("img.hides").hide('slow');
            } else {
                $(this).children("img.hides").animate({marginRight: '-143px'}, 'slow', function () {
                    $(this).hide();
                    $(this).next("img.shows").show();
                });
            }
        });

        $("#top_btn").click(function () {
            if (scroll == "off") return;
            $("html,body").animate({scrollTop: 0}, 600);
        });

    });
</script>
<script type="text/javascript">
    var place = new Array("地点A", "地点B", "地点C", "地点D", "地点E", "地点F", "地点G", "地点H", "地点I");
    var bike = new Array("公路车", "山地车", "平把公路车", "山马车", "城市休闲车", "旅行车", "E-Bike", "折叠自行车", "Gravel Bike");
    var pic = new Array("BusBike.jpg", "MountBike.jpg", "FlatBike.jpg", "HorseBike.jpg", "RestBike.jpg", "TourBike.JPEG", "E-Bike.jpg", "FoldBike.jpg", "GravelBike.jpg");
    var len = 9;
    var index = 0;
    var inHT = "";
    var cnt = 0;
    for (var p in place) {
        inHT += '<li id=' + (cnt++) + '>';
        inHT += '<div class="list-infoBox"> <a title=' + bike[(index) % len] + ' target="_blank" class="imgtype" href="#"> <img width="290" height="194" src="images/bike/' + pic[(index) % len] + '" alt=' + bike[(index) % len] + '> </a>';
        inHT += '<p class="infoBox"> <a  title=' + bike[(index) % len] + ' href="#" target="_blank" class="info-title">' + bike[(index++) % len] + '</a> </p>';
        inHT += '<p class="fc-gray"> <span class="tag-gray">';
        inHT += p;
        inHT += '</span> <span class="">老司机专用车</span> <em class="shuxian">|</em> 非常好用 </p>';
        inHT += '<p class="priType-s"> <span> <i class="fc-org priType"> 每小时2元 </i> </span> <s>每小时5元</s> </p>';
        inHT += '</div>';
        inHT += '</li>';
    }

    document.getElementById("parent").innerHTML = inHT;

    function regcheck(){
        /*var user={
            name:$("#name").val(),
            phone:$("#phone").val(),
            gender:$("#gender").val(),
            password:$("#password").val()
        };
        var JsonData = JSON.stringify(user);
        console.log(JsonData);
        $.ajax({
            type : "POST",
            url : "/registe.do",
            dataType:"text",
            contentType: "application/json",
            data : JsonData,
            success : function(data) {
                alert(data);
            }
        });*/
       /* var name=$("#name").val();
        var phone=$("#phone").val();
        var password=$("#password").val();
        var gender=$("#gender").val();
        var url="/register.do?name="+name+"&&phone="+phone+"&&password="+password+"&&gender="+gender;
        $("#reg").attr("action",url);*/
       /* alert($("#name").val());
        alert($("#phone").val());
        alert($("#password").val());
        alert($("#gender").val());*/
        return true;
    }
</script>
</body>
</html>