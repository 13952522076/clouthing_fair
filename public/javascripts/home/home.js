/**
 * Created by maxu
 * on 15/2/10.
 */
$(document).ready(function(){
    var case_container =$(".case_container");
    case_container.mouseenter(function(){
        $(".case_unpoint").hide();
        $(".case_point").show();
    });
    case_container.mouseleave(function(){
        $(".case_point").hide();
        $(".case_unpoint").show();
    });
});