/**
 * Created by maxu
 * on 15/2/9.
 */
$(document).ready(function(){
    var all_a=$(".header_ul li a");//li标签下所有a元素
    var temp = $("#temp_").html();//temp的值
    var get_li = $("#header_"+temp+"");//当前页面对应的li
    var get_label=$(".home_"+temp+"");//当前页面对应的label
    var get_a = $("#header_"+temp+" a");//当前页面对应的a
    //给a设置红色字体
    all_a.addClass("textBlack");
    get_a.removeClass("textBlack");
    get_a.addClass("textRed");
    //给当前添加红色下划线
    get_li.addClass("header_underline");

});

