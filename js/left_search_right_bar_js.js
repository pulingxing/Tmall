$(function() {

	$(window).scroll(function() {
		var t = $(this).scrollTop();
		if (t > 700) {
			$(".left_bar_ul").stop().fadeIn(150);
			$(".right_bar_ul #back_top").stop().fadeIn(150);
			$(".right_bar_ul #back_top").stop().fadeIn(150);
			$(".top_search_bar").stop().slideDown(150);
		} else {
			$(".left_bar_ul").stop().fadeOut(150);
			$(".right_bar_ul #back_top").stop().fadeOut(150);
			$(".top_search_bar").stop().slideUp(150);
		}

	});

	$(".right_bar_ul #back_top,.left_bar_ul li:last-child,#right_bar_hover_icon_9").click(function() {
		$("body,html").stop().animate({
			scrollTop: 0
		}, 1800);
	});
});