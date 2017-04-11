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