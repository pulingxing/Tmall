$(function(){
	 $(window).scroll(function() {
		var t = $(this).scrollTop();
		if (2120<=t&&t<2720) {
			$(".left_bar_li:nth-child(2)").css("background-color","#EA5F8D")
		}
		else
		{
			$(".left_bar_li:nth-child(2)").css("background-color","#626262")
		};
		if (2720<=t&&t<3320) {
			$(".left_bar_li:nth-child(3)").css("background-color","#64C333")
		}
		else
		{
			$(".left_bar_li:nth-child(3)").css("background-color","#626262")
		};
		if (3320<=t&&t<3820) {
			$(".left_bar_li:nth-child(4)").css("background-color","#F7A945")
		}
		else
		{
			$(".left_bar_li:nth-child(4)").css("background-color","#626262")
		};
		if (3820<=t&&t<4425) {
			$(".left_bar_li:nth-child(5)").css("background-color","#19C8A9")
		}
		else
		{
			$(".left_bar_li:nth-child(5)").css("background-color","#626262")
		};
		if (4425<=t&&t<4931) {
			$(".left_bar_li:nth-child(6)").css("background-color","#F15453")
		}
		else
		{
			$(".left_bar_li:nth-child(6)").css("background-color","#626262")
		};
		if (4931<=t&&t<5520) {
			$(".left_bar_li:nth-child(7)").css("background-color","#00A8FF")
		}
		else
		{
			$(".left_bar_li:nth-child(7)").css("background-color","#626262")
		};
         if (5520<=t) {
			$(".left_bar_li:nth-child(8)").css("background-color","#DD2727")
		}
		else
		{
			$(".left_bar_li:nth-child(8)").css("background-color","#626262")
		};
		
	});
	       $(".left_bar_li:nth-child(2)").hover(function() {
		$(this).css("background-color","#EA5F8D").mouseout(function(){
			$(this).css("background-color","#626262");
		});
		});
		$(".left_bar_li:nth-child(3)").hover(function() {
		$(this).css("background-color","#64C333").mouseout(function(){
			$(this).css("background-color","#626262");
		});
		});
		$(".left_bar_li:nth-child(4)").hover(function() {
		$(this).css("background-color","#F7A945").mouseout(function(){
			$(this).css("background-color","#626262");
		});
		});
		$(".left_bar_li:nth-child(5)").hover(function() {
		$(this).css("background-color","#19C8A9").mouseout(function(){
			$(this).css("background-color","#626262");
		});
		});
		$(".left_bar_li:nth-child(6)").hover(function() {
		$(this).css("background-color","#F15453").mouseout(function(){
			$(this).css("background-color","#626262");
		});
		});
		$(".left_bar_li:nth-child(7)").hover(function() {
		$(this).css("background-color","#00A8FF").mouseout(function(){
			$(this).css("background-color","#626262");
		});
		});
		$(".left_bar_li:nth-child(8)").hover(function() {
		$(this).css("background-color","#DD2727").mouseout(function(){
			$(this).css("background-color","#626262");
		});
	});
	$(".left_bar_li:nth-child(9)").hover(function() {
		$(this).css("background-color","#ACACAC").mouseout(function(){
			$(this).css("background-color","#080808");
		});
	});
	
	
	
	$(".left_bar_li:nth-child(1)").click(function() {
		$("body,html").stop().animate({
			scrollTop:750
		}, 800);
	});
		$(".left_bar_li:nth-child(2)").click(function() {
		$("body,html").stop().animate({
			scrollTop:2420
		}, 800);
	});
	$(".left_bar_li:nth-child(3)").click(function() {
		$("body,html").stop().animate({
			scrollTop:2920
		}, 800);
	});
	$(".left_bar_li:nth-child(4)").click(function() {
		$("body,html").stop().animate({
			scrollTop:3520
		}, 800);
	});
	$(".left_bar_li:nth-child(5)").click(function() {
		$("body,html").stop().animate({
			scrollTop:4020
		}, 800);
	});
	$(".left_bar_li:nth-child(6)").click(function() {
		$("body,html").stop().animate({
			scrollTop:4625
		}, 800);
	});
	$(".left_bar_li:nth-child(7)").click(function() {
		$("body,html").stop().animate({
			scrollTop:5131
		}, 800);
	});
	$(".left_bar_li:nth-child(8)").click(function() {
		$("body,html").stop().animate({
			scrollTop:5720
		}, 800);
	});
});