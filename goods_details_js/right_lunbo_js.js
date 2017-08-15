$(function() {
	var i = 0;
	var clone = $(".banner .img li").first().clone();
	$(".banner .img").append(clone);
	var size = $(".banner .img li").size();
	for (var j = 0; j < size - 1; j++) {
		$(".banner .num").append("<li></li>");
	}
	$(".banner .num li").first().addClass("on");
//	/*鼠标划入圆点*/
//	$(".banner .num li").hover(function() {
//			var index = $(this).index();
//			i = index;
//			$(".banner .img").stop().animate({
//				top: -index * 160
//			}, 1000)
//			$(this).addClass("on").siblings().removeClass("on")
//		})
		/*自动轮播*/
	var t = setInterval(function() {
			i++;
			move()
		}, 3000)
		/*对banner定时器的操作*/
	$(".banner").hover(function() {
			clearInterval(t);
		}, function() {
			t = setInterval(function() {
				i++;
				move()
			}, 3000)
		})
		/*向左的按钮*/
	$(".btn_l").click(function() {
			i++;
			move();
	})
		/*向右的按钮*/
	$(" .btn_r").click(function() {
		i--;
		move();
	})
	function move() {
		if (i == size-3) {
			$(".banner  .img").css({
				top: 0
			})
			i = 1;
		}
		if (i == -1) {
			$(".banner .img").css({
				top: -(size - 1) * 160
			})
			i = size - 2;
		}
		$(".banner .img").stop().animate({
			top: -i * 160
		}, 1000)
		if (i == size - 1) {
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")
		} else {
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
	}
})