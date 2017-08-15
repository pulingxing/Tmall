function openNew() {
	//获取页面的高度和宽度
	var sWidth = document.body.scrollWidth;
	var sHeight = document.body.scrollHeight+11000;
	//获取页面的可视区域高度和宽度
	var wHeight = document.documentElement.clientHeight;
	var oMask = document.getElementById("mask");
	oMask.style.height = sHeight + "px";
	oMask.style.width = sWidth + "px";
};
window.onload = function() {
	var oBtn = document.getElementById("relogin");
	//点击登录按钮
	oBtn.onclick = function() {
		openNew();
	}
};
$(document).ready(function() {
	$("#login").click(function() {

		$("#login").css({
			"color": "#F01400",
			"border-bottom": "1px solid #F01400"
		});
		$("#register").css({
			"color": "#000000",
			"border": "none"
		});
	});
	$("#register").hover(function() {
		$("#register").css({
			"color": "#F01400",
			"border-bottom": "1px solid #F01400"
		});
	});
	$("#register").click(function() {
		$("#register").css({
			"color": "#F01400",
			"border-bottom": "1px solid #F01400"
		});
		$("#login").css({
			"color": "#000000",
			"border": "none"
		});

	});
	$("#login").hover(function() {
		$("#login").css({
			"color": "#F01400",
			"border-bottom": "1px solid #F01400"
		});
	});

	$("#relogin").click(function() {
		$("#mask").fadeIn(500);
		$(".relogin_panel").fadeIn(500);

	});
	$("#login_mask_close").click(function() {
		$("#mask").fadeOut(500);
		$(".relogin_panel").fadeOut(500);
	});
	$("#mask").click(function() {
		$("#mask").fadeOut(500);
		$(".relogin_panel").fadeOut(500);
	});
	$(".login_mask_button_mask").click(function() {
		$("#mask").fadeOut(500);
		$(".relogin_panel").fadeOut(500);
	});
	$("#login_mask_button").mouseover(function() {
		$(".login_mask_button_mask").show();
	});
	$(".login_mask_button_mask").mouseout(function() {
		$(".login_mask_button_mask").hide();
	});
})