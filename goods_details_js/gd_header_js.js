$(document).ready(function() {
	$("#my_taobao").hover(function() {
		$("#my_taobao_ul").show();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");

	});
	$("#my_taobao").mouseleave(function() {
		$("#my_taobao_ul").hide();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");
	});
	$("#user_favorite").hover(function() {
		$("#user_favorite_ul").show();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");

	});
	$("#user_favorite").mouseleave(function() {
		$("#user_favorite_ul").hide();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");

	});
	$("#user_support").hover(function() {
		$("#user_support_img").show();

	});
	$("#user_support").mouseleave(function() {
		$("#user_support_img").hide();

	});
	$("#user_nav").hover(function() {
		$("#user_nav_img").show();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");
		$(".goods_fenlei").hide();

	});
	$("#user_nav").mouseleave(function() {
		$("#user_nav_img").hide();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");
		$(".goods_fenlei").show();

	});
	$("#user_phone").hover(function() {
		$("#user_phone_imge").show(200);
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");
	});
	$("#user_phone").mouseleave(function() {
		$("#user_phone_imge").hide(200);
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");
	});
	$(".goods_pandect_left_small_img1").hover(function() {
		$(".fangdajing_big_img").attr("src", "img_goods_details/goods_pandect_left_big_img_1.jpg");
		$(".fangdajing_most_img").attr("src", "img_goods_details/goods_pandect_left_most_img_1.jpg");
	});
	$(".goods_pandect_left_small_img2").hover(function() {
		$(".fangdajing_big_img").attr("src", "img_goods_details/goods_pandect_left_big_img_2.jpg");
		$(".fangdajing_most_img").attr("src", "img_goods_details/goods_pandect_left_most_img_2.jpg");
	});
	$(".goods_pandect_left_small_img3").hover(function() {
		$(".fangdajing_big_img").attr("src", "img_goods_details/goods_pandect_left_big_img_3.jpg");
		$(".fangdajing_most_img").attr("src", "img_goods_details/goods_pandect_left_most_img_3.jpg");
	});
	$(".goods_pandect_left_small_img4").hover(function() {
		$(".fangdajing_big_img").attr("src", "img_goods_details/goods_pandect_left_big_img_4.jpg");
		$(".fangdajing_most_img").attr("src", "img_goods_details/goods_pandect_left_most_img_4.jpg");
	});
	$(".goods_pandect_left_small_img5").hover(function() {
		$(".fangdajing_big_img").attr("src", "img_goods_details/goods_pandect_left_big_img_5.jpg").fadeIn(1500);
		$(".fangdajing_most_img").attr("src", "img_goods_details/goods_pandect_left_most_img_5.jpg");
	});

	$(".erweima_li").hover(function() {
		$(".erweima_img").fadeToggle();
	});
	$(".goods_pandect_middle_size_div div").mouseenter(function() {
		$(this).css("border", "2px solid #BE0106").mouseleave(function() {
			$(this).siblings().css("border", "2px solid #B8B7BD");
		});
	});
	$(".goods_pandect_middle_color_img").mouseover(function() {
		$(this).css("border", "2px solid #BE0106").mouseleave(function() {
			$(this).css("border", "2px solid #FFFFFF");
		});
	});
	$(".mui-amount-increase").click(function() {
		$("#goods_pandect_middle_amounts_input").val(parseInt($("#goods_pandect_middle_amounts_input").val()) + 1);
	});
	$(".mui-amount-decrease").click(function() {
		$("#goods_pandect_middle_amounts_input").val(parseInt($("#goods_pandect_middle_amounts_input").val()) - 1);
	});
	$(".erweima_maslk").hover(function() {
		$(".tm_qrcode_hpic").fadeIn(200).mouseleave(function() {
			$(this).fadeOut(200);
		});

	});
	$(".float_top_bar_right").hover(function(){
		$(".float_top_bar_right_erweima_div").fadeIn(250).mouseleave(function(){
			$(this).fadeOut(250);
		});
	});
	$(".goods_contents_left_part_5_button_div button:nth-child(1)").hover(function(){
		$(this).css({"background-color":"#6AA2B1","color":"#FFFFFF"});
		$(this).siblings().css({"color":"#333333","background-color":"#E6E6E6"});
		$("#goods_contents_left_part_5_content_collect").hide();
		$("#goods_contents_left_part_5_content_sale").show();
	});
	$(".goods_contents_left_part_5_button_div button:nth-child(2)").hover(function(){
		$(this).css({"background-color":"#6AA2B1","color":"#FFFFFF"});
		$(this).siblings().css({"color":"#333333","background-color":"#E6E6E6"});
		$("#goods_contents_left_part_5_content_sale").hide();
		$("#goods_contents_left_part_5_content_collect").show();
	});
     $(".goods_contents_left_part_5_content_sale_img_small").mouseenter(function(){
     	$(this).prev().show().mouseleave(function(){
     		$(this).hide();
     	});
     });
     $(".goods_contents_middle_title_bar_right").hover(function(){
     	$(".goods_contents_middle_title_bar_right_erweima_div").fadeIn(250).mouseleave(function(){
     		$(this).fadeOut(250);
     	});
     });
     $(".goods_contents_middle_goods_details_guanzhu").click(function(){
     	$(this).css("background-color","#FF1493");
     	$(this).find("li").css("color","#FFFF00");
     	$("#guanzhu").html("已关注");
     });
    $(".goods_evaluate_details_small_img_div").mouseenter(function(){
    	$(this).siblings(".goods_evaluate_details_big_img_div").show(400).mouseleave(function(){
    		$(this).hide(400);
    	});	
    });
   
});