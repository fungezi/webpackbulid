require("path");
function unique(arr){
		var obj = {};
		var objArr = [];
		var tempArr = [];
		for(var i = 0;i<arr.length;i++){
			if(!(arr[i] instanceof Object)){
				if(!obj[arr[i]]){
					tempArr.push(arr[i]);
					obj[arr[i]] = true;
				}
			}else{
				if(objArr.indexOf(arr[i])==-1){
					objArr.push(arr[i]);
					tempArr.push(arr[i]);
				}
			}
		}
		return tempArr;
	}
	var b = {b:1};
	var arr = [b,{a:1},{a:1},b,b]
	
	console.log(unique(arr));
console.log("helow world hello world");


<!DOCTYPE html>
<html>
<head>
	<title>focus picture</title>
	<meta charset="utf-8">
	<script type="text/javascript" src = "./jq.min.js"></script>
	
	<style type="text/css">
		*{
			padding: 0px;
			margin: 0px;
			font-size: 12px;
		}
		.focusContainer{
			width: 1000px;
			margin: 50px auto;
			position: relative;
		}
		.imgList{
			display: block;
			width: 100%;
			position: relative;
			overflow: hidden;
		}
		.imgList li{
			display: block;
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100%;

		}
		.imgList li a{
			display: block;
		}
		.imgList li .imgMes{
			display: block;
			position: absolute;
			bottom: 50px;
			left: 50px;
			background-color: rgba(0,0,0,.3);
			color: white;
			text-decoration: none;
			padding: 10px;
		}
		.imgList li img{
			display: block;
			width: 100%;
			height: auto;
		}
		.focusImg{
			position: relative;
		}
		.dotList{
			position: absolute;
			bottom: 20px;
			left: 50%;
			overflow: hidden;
			z-index: 20
		}
		.dotList li{
			float: left;
			display: block;
			background-color: gray;
			cursor: pointer;
			margin: 5px;
			width: 16px;
		    height: 16px;
		    border-radius: 8px;
		    background-color: rgba(0,0,0,.3);
		    border: 0;
		}
		.drecLeftBtn,.drecRightBtn{
			width:30px;
			height: 60px;
			background-color: gray;
			position: absolute;
			margin-top: -30px; 
			top: 50%;
			z-index: 20;
			cursor: pointer;
		}
		.drecLeftBtn{
			left: 20px;
		}
		.drecRightBtn{
			right: 20px;
		}
		.inlineBox{
			background-color: red;
			padding-top:20px; 
		}
	</style>
	<script type="text/javascript">
		$(function(){
			var imgList = $(".imgList");
			var height = $(imgList.find("li")[0]).height();
			var width = $(imgList.find("li")[0]).width();
			var length = $(imgList.find("li")).length;
			imgList.height(height);
			var dotList = $(".dotList");
			var dotHtml = "";
			var timer = "";
			$(imgList.find("li")[0]).css({
				"zIndex":2
			})
			for(var i = 0;i<$(imgList.find("li")).length;i++){
				dotHtml += "<li></li>";
				
			}
			dotList.html(dotHtml);
			dotListWidth = dotList.width();
			dotList.css("marginLeft",-dotListWidth/2);
			// 以上为样式初始化使用

			var curIndex = 0;
			var dotListCon = $(dotList.find("li"));
			var imgListCon = $(imgList.find("li"));
			$(dotList.find("li")[curIndex]).css("backgroundColor","red");
			for(var i = 0;i<dotListCon.length;i++){
				var index = i;
				(function(index){
					$(dotListCon[i]).click(function(e){
						clearInterval(timer);
						if(index > curIndex){//left in
							$(imgListCon[index]).css({
								"left":-width
							});
						}
						if(index < curIndex){//left in
							$(imgListCon[index]).css({"left":width});
						}
						move(index);
						curIndex = index;
						timer = autoTimer();
					})
				})(index);
			}

			$(".drecLeftBtn").click(function(e){
				clearInterval(timer);
				var index = (curIndex - 1) < 0?(curIndex - 1)+length:(curIndex - 1);
				if(index > curIndex){//left in
					$(imgListCon[index]).css({
						"left":-width
					});
				}
				if(index < curIndex){//left in
					$(imgListCon[index]).css({"left":width});
				}
				move(index);
				curIndex = index;
				timer = autoTimer();
			})
			$(".drecRightBtn").click(function(e){
				clearInterval(timer);
				var index = (curIndex +1)%length ;
				if(index > curIndex){//left in
					$(imgListCon[index]).css({
						"left":-width
					});
				}
				if(index < curIndex){//left in
					$(imgListCon[index]).css({"left":width});
				}
				move(index);
				curIndex = index;
				timer = autoTimer();
			})

			var autoTimer = function(){
				return setInterval(function(){
					var index = (curIndex +1)%length ;
					if(index > curIndex){//left in
						$(imgListCon[index]).css({
							"left":-width
						});
					}
					if(index < curIndex){//left in
						$(imgListCon[index]).css({"left":width});
					}
					move(index);
					curIndex = index;
				},3000)
			}
			timer = autoTimer();




			function move(index){

				$(imgListCon).css({"zIndex":0});
				$(imgListCon[curIndex]).css({"zIndex":1});

				$(imgListCon[index]).css({"zIndex":2});
				$(dotListCon[index]).css({"backgroundColor":"red"})
				$(dotListCon[curIndex]).css({"backgroundColor":"rgba(0,0,0,.3)"})
				$(imgListCon[index]).animate({
					"left":0
				});
			}

		})
	</script>
	<script type="text/javascript">
		var dataArr = [{x1:2,x2:3,x3:2,x4:4,x5:5},{x1:3,x2:4,x3:2,x4:4,x5:5},{x1:2,x2:2,x3:2,x4:1,x5:5}];
		

		var stars = [];
		for(var j = 0;j<dataArr.length;j++){
		    stars.push({
		    	s1:0,
		        s2:0,
		        s3:0,
		        s4:0,
		        s5:0,
		        index:j
		    })
			for(var e in dataArr[j]){
		    	switch(dataArr[j][e]){
		            case 1:
		                stars[j].s1++;
		            break;
		            case 2:
		                stars[j].s2++;
		            break;
		            case 3:
		                stars[j].s3++;
		            break;
		            case 4:
		                stars[j].s4++;
		            break;
		            case 5:
		                stars[j].s5++;
		            break;
		            default:
		            break;
		        }
		    }
		    
		    
		}
		var sort = [];
		for(var i = 1;i<=5;i++){
		    stars.sort(function(a,b){
		    	return b["s"+i] - a["s"+i];
		    });
		    
			for(var j = 0;j<stars.length-1;j++){
				if(!stars[j]["s"+i]&& !stars[j]["s"+i]){
					if(stars[j+1]["s"+i]&&stars[j+1]["s"+i]==stars[j]["s"+i]){
						var prev = next = 0;
						for(var n = 0;n<5;n++){
							prev += stars[j]["s"+n];
							next += stars[j+1]["s"+n];

						}
						if(prev > next){
							sort.push(stars[j]);
							sort.push(stars[j+1]);
						}else{
							sort.push(stars[j+1]);
							sort.push(stars[j]);

						}
						sort.shift();
						sort.shift();
						break;
					}else{
						sort.push(stars[j]);
						sort.unshift();
					}
		        	
		        }
			}
		}
		(function (){
			var a = 1;
			return {
				get:function(){
					return a;
				}
			}
		})()
	</script>
	<script type="text/javascript">

	function unique(arr){
		var obj = {};
		var objArr = [];
		var tempArr = [];
		for(var i = 0;i<arr.length;i++){
			if(!(arr[i] instanceof Object)){
				if(!obj[arr[i]]){
					tempArr.push(arr[i]);
					obj[arr[i]] = true;
				}
			}else{
				if(objArr.indexOf(arr[i])==-1){
					objArr.push(arr[i]);
					tempArr.push(arr[i]);
				}
			}
		}
		return tempArr;
	}
	var b = {b:1};
	var arr = [b,{a:1},{a:1},b,b]
	
	console.log(unique(arr));
	</script>
	
</head>
<body>
<div class="focusContainer">
	<div class="drecLeftBtn"></div>
	<div class="drecRightBtn"></div>
	<div class="focusImg">
		<ul class="imgList">
			<li>
				<a href="#"><img src="./img/1.png"></a>
				<a class="imgMes" href="#">图片描述信息图片描述信息图片描述信息1</a>
			</li>
			<li><a href="#"><img src="./img/2.png"></a><a class="imgMes" href="#">图片描述信息图片描述信息图片描述信息2</a></li>
			<li><a href="#"><img src="./img/3.png"></a><a class="imgMes" href="#">图片描述信息图片描述信息图片描述信息3</a></li>
			<li><a href="#"><img src="./img/4.png"></a><a class="imgMes" href="#">图片描述信息图片描述信息图片描述信息4</a></li>
			
		</ul>
		<ul class="dotList">
			
		</ul>
	</div>
</div>
<div>
	<a class="inlineBox" href="#">aaa</a>
</div>
</body>
</html>