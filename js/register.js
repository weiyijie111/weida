//判断手机格式是否正确
function dophone(){
	// 正则表达式  意为 以1开头 10个数字 以数字结尾
		var reg=/^1\d{10}$/;
		if(!reg.test($(".phone").val())){
			$(".phone-word").text("手机格式错误");
			return false;
		}else{
			$(".phone-word").text("手机格式正确");
			$(".phone-word").css("color","#339031");
			$(".phone").css("border","1px solid #339031");
			$(".figure").css("background","#dff0d8");
			$(".figure").css("border","1px solid #339031");
			$(".icon-shouji").css("color","#339031");
			return true;
		}
	}
	
	
// 密码验证部分 密码只能由数字和字母组成，长度为6-10位
function dopassword(){
		var num=/^[\da-z]{6,10}$/;
		if(!num.test($(".password").val())){
			$(".password-word").text("密码只能由数字和字母组成，长度为6-10位");
			return false;
		}else{
			$(".password-word").text("格式正确");
			$(".password").css("border","1px solid #339031");
			$(".password-word").css("color","#339031");
			$(".lockicon").css("background","#dff0d8");
			$(".lockicon").css("border","1px solid #339031");
			$(".locksicon").css("color","#339031");
			return true;
		}
	}


// 比对再次输入的密码与第一次输出是否一样

function dorepassword(){
	if($(".passwordtwo").val()!=$(".password").val()){
			$(".passwordtwo-word").text("两次密码不一致");
			$(".passwordtwo").css("border","1px solid #a94442");
			$(".passwordtwo-word").css("color","#a94442");
			$(".lockicontwo").css("background","#f2dede");
			$(".lockicontwo").css("border","1px solid #a94442");
			$(".icontwo").css("color","#a94442");
			return false;
		}else{
			$(".passwordtwo-word").text("密码一致");
			$(".passwordtwo").css("border","1px solid #339031");
			$(".passwordtwo-word").css("color","#339031");
			$(".lockicontwo").css("background","#dff0d8");
			$(".lockicontwo").css("border","1px solid #339031");
			$(".icontwo").css("color","#339031");
			return true;
		}
}


// 获取四位数的随机验证
$(function(){
	$(".erweima-button").click(function(){
			var n1=Math.floor((Math.random())*10);
			var n2=Math.floor((Math.random())*10);
			var n3=Math.floor((Math.random())*10);
			var n4=Math.floor((Math.random())*10);
			var str=n1+""+n2+""+n3+""+n4;
			$(".erweima-button").val(str);
		});
});
	
// 比对验证码与随机是否相符合
function dorandom(){
			if($(".validatetxt").val()!=$(".erweima-button").val()){
				$(".validate-word").text("验证码不正确");
				return false;
			}else{
				$(".validate-word").text("验证码正确");
				$(".validatetxt").css("border","1px solid #339031");
				$(".validate-word").css("color","#339031");
				$(".validateicon").css("background","#dff0d8");
				$(".validateicon").css("border","1px solid #339031");
				$(".icon-erweima").css("color","#339031");
				return true;
			}
}

//判断数据能否被提交 使用localStorage方法存储至数据库中
function saveStorage(){
	if(dophone()&&dopassword()&&dorepassword()&&dorandom()){
		$("form").submit();
		var data=new Object;
		data.name = document.getElementById("phone").value;
		data.password=document.getElementById("password").value;
		data.passwordtwo=document.getElementById("passwordtwo").value;
		var str=JSON.stringify(data);
		localStorage.setItem(data.name,str);
	}
	
}