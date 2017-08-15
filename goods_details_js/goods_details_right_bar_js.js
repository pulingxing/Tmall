$(function(){
	
	$(window).scroll(function() {
		var t = $(this).scrollTop();
		if (t >900) {
			$(".float_top_bar").slideDown(250);
			$(".goods_contents_right").css({"position":"fixed","top":"45px","right":"63px"})
		} else {
			$(".float_top_bar").slideUp(250);
			$(".goods_contents_right").css({"position":"absolute","top":"945px","right":"66px"})
			
		}
	});
	$(".goods_contents_right ul li:nth-child(1)").click(function(){
	    $(".goods_contents_middle_content").show();
	    $(".goods_evaluate").css("margin-top","22120px");
		$(".goods_evaluate_button_div_img").css("margin-top","21220px");
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"FFFFFF","border":"3px solid #db1f00"});
		$(this).siblings().css("color","#999999");
$(this).siblings().children("div").css({"background-color":"#cfc8bc","border":"3px solid #FFFFFF"});
		$("body,html").stop().animate({
			scrollTop:3640
		}, 300);
	});
	$(".goods_contents_right ul li:nth-child(1)").hover(function(){
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
	});
	$(".goods_contents_right ul li:nth-child(2)").click(function(){
	    $(".goods_contents_middle_content").show();
		$(".goods_evaluate").css("margin-top","22120px");
		$(".goods_evaluate_button_div_img").css("margin-top","21220px");
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
		$(this).siblings().css("color","#999999");
$(this).siblings().children("div").css({"background-color":"#cfc8bc","border":"3px solid #FFFFFF"});
		$("body,html").stop().animate({
			scrollTop:10270
		}, 300);
	});
	$(".goods_contents_right ul li:nth-child(2)").hover(function(){
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
	});
	$(".goods_contents_right ul li:nth-child(3)").click(function(){
	    $(".goods_contents_middle_content").show();
		$(".goods_evaluate").css("margin-top","22120px");
		$(".goods_evaluate_button_div_img").css("margin-top","21220px");
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
		$(this).siblings().css("color","#999999");
$(this).siblings().children("div").css({"background-color":"#cfc8bc","border":"3px solid #FFFFFF"});
		$("body,html").stop().animate({
			scrollTop:11160
		}, 300);
	});
	$(".goods_contents_right ul li:nth-child(3)").hover(function(){
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
	});
	$(".goods_contents_right ul li:nth-child(4)").click(function(){
	    $(".goods_contents_middle_content").show();
		$(".goods_evaluate").css("margin-top","22120px");
		$(".goods_evaluate_button_div_img").css("margin-top","21220px");
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
		$(this).siblings().css("color","#999999");
$(this).siblings().children("div").css({"background-color":"#cfc8bc","border":"3px solid #FFFFFF"});
		$("body,html").stop().animate({
			scrollTop:20740
		}, 300);
	});
	$(".goods_contents_right ul li:nth-child(4)").hover(function(){
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
	});
	$(".goods_contents_right ul li:nth-child(5)").click(function(){
	    $(".goods_contents_middle_content").show();
		$(".goods_evaluate").css("margin-top","22120px");
		$(".goods_evaluate_button_div_img").css("margin-top","21220px");
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
		$(this).siblings().css("color","#999999");
$(this).siblings().children("div").css({"background-color":"#cfc8bc","border":"3px solid #FFFFFF"});
		$("body,html").stop().animate({
			scrollTop:29027
		}, 300);
	});
	$(".goods_contents_right ul li:nth-child(5)").hover(function(){
		$(this).css("color","#CC0000");
		$(this).children("div").css({"background-color":"#FFFFFF","border":"3px solid #db1f00"});
	});
	$(".float_top_bar_middle_2").click(function(){
		$(".float_top_bar_middle_2").css({"border-top":"3px solid #B00000","color":"#B00000"});
		$(".float_top_bar_middle_2").prev().css({"border-top":"1px solid #DFDFDF","color":"#333333"});
		$(".goods_contents_middle_content").hide();
		$(".goods_evaluate").css("margin-top","0px");//22120px
		$(".goods_evaluate_button_div_img").css("margin-top","-1235px");//21220px
		$("body,html").stop().animate({
			scrollTop:900
		}, 300);
	});
	$(".float_top_bar_middle_1").click(function(){
		$(".float_top_bar_middle_1").css({"border-top":"3px solid #B00000","color":"#B00000"});
		$(".float_top_bar_middle_1").next().css({"border-top":"1px solid #DFDFDF","color":"#333333"});
		$(".goods_contents_middle_content").show();
		$(".goods_evaluate").css("margin-top","22120px");
		$(".goods_evaluate_button_div_img").css("margin-top","21220px");
		$("body,html").stop().animate({
			scrollTop:900
		}, 300);
	});
})