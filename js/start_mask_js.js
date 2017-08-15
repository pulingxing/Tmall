
$(function(){
	var Width = document.body.scrollWidth;
	var Height = document.body.scrollHeight;
	var sMask = document.getElementById("start_mask");
	sMask.style.height = Height + "px";
	sMask.style.width = Width + "px";
	sMask.style.position="fixed";
	$(".start_prize_mask_close,.start_prize_mask_mask").click(function(){
	$(".start_prize_mask_close,.start_prize_mask_mask,.start_prize_mask").fadeOut(200);
	setTimeout(function(){
       $(".right_bar").fadeIn(1500);
	   },1500);
	   setTimeout(function(){
       $(".erweima_div").show();
	   },4000);
});
});
