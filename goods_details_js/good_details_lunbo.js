$(function(){
	
	//代码初始化
	var size=$(".out .img li").size();
	
	for(var i=1; i<=size; i++){
		var li="<li>"+"</li>";
		$(".out .num").append(li);
		$(".out .num li:even").hide();
		
	}
	//手动控制轮播图
	$(".out .img li").eq(0).show();
	$(".out .num li").eq(0).addClass("active");
	$(".out .num li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");		
		var index=$(this).index();	
		i=index;
		$(".out .img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);	
	})
	//自动轮播
	var i=0;
	var t=setInterval(move,3000);
	//核心向左运动函数
	function moveL(){
		i--;
		if(i==-1){
			i=size-1;	
		}
		
		$(".out .num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".out .img li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
		
	}
	//核心向右运动函数
	function move(){
		i++;
		if(i==size){
			i=0;	
		}
		
		$(".out .num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".out .img li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
		
	}
	//定时器的开始于结束
	$(".out").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,3000);
	})
})
