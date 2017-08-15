window.onload = function() {
	
				var objDemo = document.getElementById("demo");
				var objSmallBox = document.getElementById("small-box");
				var objMark = document.getElementById("mark");
				var objFloatBox = document.getElementById("float-box");
				var objBigBox = document.getElementById("big-box");
				var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];
				objMark.onmouseover = function() {
					  objDemo.style.cursor="all-scroll";
					objFloatBox.style.display = "block"
					objBigBox.style.display = "block"
				}
				objMark.onmouseout = function() {
				
					objFloatBox.style.display = "none"
					objBigBox.style.display = "none"
				}
				objMark.onmousemove = function(ev) {
					var _event = ev || window.event; //兼容多个浏览器的event参数模式
					var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
					var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;
					if (left < 0) {
						left = 0;
					} else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
						left = objMark.offsetWidth - objFloatBox.offsetWidth;
					}
					if (top < 0) {
						top = 0;
					} else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
						top = objMark.offsetHeight - objFloatBox.offsetHeight;
					}
					objFloatBox.style.left = left + "px"; //oSmall.offsetLeft的值是相对什么而言
					objFloatBox.style.top = top + "px";
					var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
					var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
					objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
					objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
				}
			}