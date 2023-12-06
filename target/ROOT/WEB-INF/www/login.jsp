<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>mbxvoid</title>
	</head>
	<link rel="stylesheet" href="../resources/com/css/index.css">
	<link href="../resources/com/assets/fontawesome/css/fontawesome.css" rel="stylesheet">
	<link href="../resources/com/assets/fontawesome/css/all.css" rel="stylesheet">
	<link href="../resources/com/assets/fontawesome/css/solid.css" rel="stylesheet">
	<link href="../resources/com/assets/fontawesome/css/brands.css" rel="stylesheet">
	<link href="../resources/com/assets/fontawesome/css/v4-font-face.css" rel="stylesheet">
	<body>
	    <div id="world_body" class="display-flex">
	        <section class="login_box-section display-flex flex-direction-column">
            	<div class="logo_text">MBXVOID</div>
	            <article class="login_box display-flex flex-direction-column">
	                <div class="login_box-layer display-flex">
	                    <div class="user_box-title display-flex">
	                        <h1>Sign In to Login</h1>
	                    </div>
	                    <div class="user_box-loginButton-box display-flex row-percent-30 col-percent-60">
	                        <div class="loginButton-box-fram input_target-basic_style display-flex row-percent-40 col-percent-100">
	                            <div>
	                                <span class="login_span" data-login-active="false">아이디를 입력해 주세요.</span>
	                                <form id="LOGIN_FORM">
	                                    <input id="login_id" class="required hidden row-percent-65 input_basic_placeholder" type="text"  autocomplete="off">
	                                </form>
	                            </div>
	                            <label for="icon-sign_in-button">
		                            <button type="button" id="icon-sign_in-button">
		                            	<i class="fas fa-chevron-circle-right"></i>
		                        	</button>
	                            </label>
	                    	</div>
	                    </div>
	                </div>
	                <article>
	           			<div id="guest_login" class="cursor-pointer">GUEST LOGIN</div>
	           			
	           			
	           		</article>
	           </article>
	        </section>
	    </div>
	</body>
</html>
<script src="../resources/com/js/jquery/jquery-3.6.0.min.js"></script>
<script src="../resources/com/js/login.js"></script>
<script src="../resources/com/js/common.js"></script>

<script>
$("#guest_login").click(function(){
	//guestLogin();
	testLogin();
})
function guestLogin(){
	var mebx = new Mebx();
	var path = 'login/loginCheck';
    $.ajax({
    	type:"GET",
    	url : path,
    	data: JSON.stringify({
    		user_id : "guest"
    	}),
    	contentType : "application/json; charset=utf-8",
    	dataType : "json",
    	success : function(data){
			console.log(data);
    		if(data){
    			window.location.href="/"+data;
    		}else{
	    		mebx.showMessage({title:"error", message:"error" ,type:"error"});
    		}
    	},
    	error : function(){
    		mebx.showMessage({title:"error", message:"error" ,type:"error"});
    		
    	}
    	
    });
}
function testLogin(){
	window.location.href = "/test/test";
}
</script>