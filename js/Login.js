

// 用户名验证部分  用getItem读取数据库中存储的用户名
function checkPhone(){
	var str=localStorage.getItem($(".username").val());
	if(str!=null){
		$(".username-word").text("用户名正确").css("color","#339031");
		$(".username").css("border","1px solid #339031");
		$(".figure").css("background","#dff0d8").css("border","1px solid #339031");
		$(".icon-ren").css("color","#339031");
		return true;
	}else{
		$(".username-word").text("用户名不正确");
		return false;
	}
}


//判断输入的密码与数据库中的是否一致
function checkPassword(){
	var password=$(".username").val();
	var str=localStorage.getItem(password);
	var data=JSON.parse(str);//将js格式转化为JSON
	if($(".password").val()!=data.password){
		$(".password-word").text("密码不正确");
		return false;
	}else{
		$(".password-word").text("密码正确").css("color","#339031");
		$(".icon-mima").css("color","#339031");
		$(".password").css("border","1px solid #339031");
		$(".lockicon").css("background","#dff0d8").css("border","1px solid #339031");
		return true;
	}


}

// 验证码验证部分
// 随机产生四位数的验证码
$(function(){
	$(".replaceimg").click(function(){
			var n1=Math.floor((Math.random())*10);//使用0-10的随机数*10+向下取整
			var n2=Math.floor((Math.random())*10);
			var n3=Math.floor((Math.random())*10);
			var n4=Math.floor((Math.random())*10);
			var str=n1+""+n2+""+n3+""+n4;
			$(".validateicon").val(str);
		});
});
	

// 验证是否与随机产生的验证码相同
function checkRandom(){
	if($(".validatetxt").val()!=$(".validateicon").val()){//对比输入框内的内容与验证码是否相同
		$(".validate-word").text("验证码不正确");
		return false;
	}else{
		$(".validate-word").text("验证码正确");
		$(".validatetxt").css("border","1px solid #339031");
		$(".validate-word").css("color","#339031");
		$(".validateicon").css("background","#dff0d8").css("border","1px solid #339031");
		$(".icon-erweima").css("color","#339031");
		return true;
	}
}

//验证上面的内容是否为true 如果是 就提交数据 如果不是就不提交
function saveStorage(){
	// return checkPhone()&&checkPassword()&&checkRandom();
	$("form").submit();
	if(checkPhone()&&checkPassword()&&checkRandom()){
		var username=$(".username").val();
        localStorage.username=username;
	}
}