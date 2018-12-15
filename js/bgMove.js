// window.onload = function(){

	// 左侧三个移动规律：随鼠标
	var l_d1 = document.getElementById('circle1');
	var l_d2 = document.getElementById('square1');
	var l_d3 = document.getElementById('close1'); 

	// 剩余的移动规律: 与鼠标相反
	var r_d1 = document.getElementById('circle2');
	var r_d2 = document.getElementById('square2');
	var r_d3 = document.getElementById('close2'); 
	var r_d4 = document.getElementById('circle3');
	var r_d5 = document.getElementById('square3');
	var r_d6 = document.getElementById('close3'); 
	var r_d7 = document.getElementById('circle4');
	var r_d8 = document.getElementById('square4'); 


	// 获取中间点的值。
	var middlePointX = 0;
	var middlePointY = 0;
	function getMiddleStyle(){
		middlePointX = document.documentElement.clientWidth/2;
		middlePointY = document.documentElement.clientHeight/2; 
	}

	getMiddleStyle();

	// 当窗口变化，重新计算。
	window.onresize = getMiddleStyle;

	function transMove(elem,X,Y){
		elem.style.webkitTransform = 'translate3d(' + X +','+Y+',0)';
		elem.style.transform = 'translate3d(' + X +','+Y+',0)';
	}
	
	document.onmousemove = function(ev){
		var ev = ev || window.event;
		var disX = ev.clientX;
		var disY = ev.clientY;

		MoveS = 60;  //  移动速度

		// 在中间点右上-加/左下-减
		var leftX = (disX - middlePointX)/MoveS + 'px';
		var leftY = (disY - middlePointY)/MoveS + 'px';

		// 右侧相反
		var rightX = (middlePointX - disX)/MoveS + 'px';
		var rightY = (middlePointY - disY )/MoveS + 'px';
		function transAll(){
			// 左侧
			transMove(l_d1,leftX,leftY);
			transMove(l_d2,leftX,leftY);
			transMove(l_d3,leftX,leftY);

			// 右侧
			transMove(r_d1,rightX,rightY);
			transMove(r_d2,rightX,rightY);
			transMove(r_d3,rightX,rightY);
			transMove(r_d4,rightX,rightY);
			transMove(r_d5,rightX,rightY);
			transMove(r_d6,rightX,rightY);
			transMove(r_d7,rightX,rightY);
			transMove(r_d8,rightX,rightY);
		}

		var b_version = navigator.appVersion;
        var version = b_version.split(";");
        // function curPosition(elem){
        // 	elem.currentStyle.top;
        // 	elem.currentStyle.left;
        // }
        function move(elem,X,Y){
        	elem.style.marginLeft = X;
        	elem.style.marginTop = Y;
        }
        function moveAll(){
        	// 左侧
        	move(l_d1,leftX,leftY);
        	move(l_d2,leftX,leftY);
        	move(l_d3,leftX,leftY);

        	// 右侧
        	move(r_d1,rightX,rightY);
        	move(r_d2,rightX,rightY);
        	move(r_d3,rightX,rightY);
        	move(r_d4,rightX,rightY);
        	move(r_d5,rightX,rightY);
        	move(r_d6,rightX,rightY);
        	move(r_d7,rightX,rightY);
        	move(r_d8,rightX,rightY);
        }

	  	if (window.navigator.userAgent.indexOf("MSIE")>=1 && version.length > 1) {
            var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
            trim_Version > 9?transAll():moveAll();
        }else{
        	transAll();
        }

		
	}

// }