$(function(){
	var i=0;
	var sWidth = document.body.scrollWidth;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);	
	var size=$(".banner .img li").size();	
	for(var j=0;j<size-1;j++){
		$(".banner_btn .num").append("<li></li>");
	}
	$(".banner_btn .num li").first().addClass("on");
	/*鼠标划入圆点*/
	$(".banner_btn .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-index*(1366)},800)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move();
	},4000)
	/*对banner定时器的操作*/
	$(".banner_btn").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},4000);
	})
	function move(){
		if(i==size){
			$(".banner  .img").css({left:0})			
			i=1;
		}
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*(1366)})
			i=size-2;
		}
		$(".banner .img").stop().animate({left:-i*(1366)},800)
		if(i==size-1){
			$(".banner_btn .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner_btn .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}	
})

