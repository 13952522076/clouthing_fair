/**
 * Created by maxu
 * on 15/2/10.
 */
$(document).ready(function(){
    var case_container =$(".case_container");
    case_container.mouseenter(function(){
        $(".case_unpoint").fadeOut(500);
        $(".case_point").fadeIn(1000);
    });
    case_container.mouseleave(function(){
        $(".case_point").fadeOut(500);
        $(".case_unpoint").fadeIn(1000);
    });
    showIpadContent("ipad_content_service");




   //$("#slides").slidesjs({width: 700,
   //    height: 350,
   //    start: 1,navigation:{
   //        active: false,//是否开启左右按钮
   //        effect: "fade"//触发按钮时，焦点图切换的特效，可选参数"slide"和"fade"
   //    }});




});
$(function() {
    $('#slides').slidesjs({
        width: 940,
        height: 320,
        play: {
            active: true,
            auto: true,
            interval: 4000,
            swap: true
        }
    });
});


function showIpadContent(id){
    hiddenIpadContent();
    changeIpadTitle(id);
    var contentDiv = $("#"+id+"");
    contentDiv.slideDown(800);
    changeIpadImage(id);
}
function changeIpadTitle(id){
    var title={
        ipad_content_traditional    :"传统订货会",
        ipad_content_design         :"设计理念",
        ipad_content_service        :"我们的服务",
        ipad_content_solutions      :"解决方案",
        ipad_content_ipadAir        :"Ipad Air"
    };
    var getTitle = title[id];
    $("#ipad_title p").html(getTitle);

}
function hiddenIpadContent(){
    $("#ipad_content_traditional").hide();
    $("#ipad_content_design").hide();
    $("#ipad_content_service").hide();
    $("#ipad_content_solutions").hide();
    $("#ipad_content_ipadAir").hide();
}
 function changeIpadImage(id){
     var img={
         ipad_content_traditional    :"menu2Click.png",
         ipad_content_design         :"menu4Click.png",
         ipad_content_service        :"menu1Click.png",
         ipad_content_solutions      :"menu3Click.png",
         ipad_content_ipadAir        :"menu5Click.png"
     };
     var obj={
         ipad_content_traditional    :"ipad_menu_traditional",
         ipad_content_design         :"ipad_menu_design",
         ipad_content_service        :"ipad_menu_service",
         ipad_content_solutions      :"ipad_menu_solutions",
         ipad_content_ipadAir        :"ipad_menu_ipadAir"
     };
     var dirname_ = "images/home/";
     $("#ipad_menu_service").attr('src',dirname_+"menu1.png");
     $("#ipad_menu_traditional").attr('src',dirname_+"menu2.png");
     $("#ipad_menu_solutions").attr('src',dirname_+"menu3.png");
     $("#ipad_menu_design").attr('src',dirname_+"menu4.png");
     $("#ipad_menu_ipadAir").attr('src',dirname_+"menu5.png");
     var OBJ =obj[id];
     var IMG = img[id];
     $("#"+OBJ).attr('src',dirname_+IMG);
 };




