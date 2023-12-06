$(function(){
    var mebx = new Mebx();
	
    // 로그인 박스 입력시 아이콘 색 변경
    $(".loginButton-box-fram").keyup(function(){
        
        var id = $("#login_id").val();
        if("undefined" === typeof id || "" === id || null === id){
            $(".fa-chevron-circle-right").css({'color':'#999'});
            $("label[for='icon-sign_in-button']").removeClass("cuser-pointer")
        }else{
            $(".fa-chevron-circle-right").css({'color':'#5771d2'});
            $("label[for='icon-sign_in-button']").addClass("cuser-pointer")
        }
    })
	function loginactive(){
        var dataStat = $(".login_span").data("login-active");
        if(false === dataStat){ // 로그인 버튼이 활성화 됐을때 로직 수행
            $(".login_span").css( {"margin-top": "0px","font-size": "10px"});
            $(".input_target-basic_style").css({"border":"1px solid #7ebaff"});
            $("#login_id").removeClass("hidden");
            $("#login_id").focus();
            //loginbuttonClickEvent(); // 로그인 이벤트 발생
        }else if(true === dataStat){
            $(".login_span").css( {"margin-top": "0px","font-size": "12px"});
            $(".input_target-basic_style").css({"border":"1px solid #999"});
            $("#login_id").addClass("hidden");
        }
	}
   	$(document).on("click",function(e){
        var id = $("#login_id").val();
        //아이디 입력 박스 노출
        if($(e.target).closest(".login_span").length){
            $(".login_span").data("login-active",false);
            loginactive();
        //아이디 입력 박스 숨김
        }else if(!$(e.target).closest("#login_id").length && !$(e.target).closest("#icon-sign_in-button").length){
            if("undefined" === typeof id || "" === id || null === id){
                $(".login_span").data("login-active", true);
                loginactive();
            }
            return;
        }
    })
    
//-------------로그인 클릭 이벡트 트리거      
	 	$('#LOGIN_FORM').keypress(function (e) {
            if (e.which === 13) {
           		loginbuttonClickEvent();
            }
        });
        
        $("#icon-sign_in-button").off().on("click",function(){
			//loginbuttonClickEvent();
        });
//-------------로그인 클릭 이벡트 트리거 
    function loginbuttonClickEvent(){
		event.preventDefault();
		
		logInValidationCheck().then(function(isValid){
			if(isValid){
				window.location.href="/page.do?command=goMainPage";
			}else{
				mebx.showMessage({"title":"로그인 실패","message":"아이디를 확인해 주세요.","type":"error"});
				vibrationEffect();
			}
		})

    }
    //로그인 실패시 이팩트 
	function vibrationEffect(){
		$(".input_target-basic_style").addClass("vibration");
		setTimeout(function() {
			$(".input_target-basic_style").removeClass("vibration");
		}, 400);
	} 
    //로그인 유효성 검사
    function logInValidationCheck(){
		return new Promise(function(resolve){
		
        var requiredInputs = $("#LOGIN_FORM input.required");
        var isValid = false;
        var param = [];
        
	        requiredInputs.each(function(){
	            var inputValue = $(this).val();
	            var inputId = $(this)[0].id;
	            
	            inputValue = inputValue.trim();
	            
	            if(inputValue=== ""){
	                isValid = false;
				}else{
					isValid = true;
				}
	            param.push({[inputId] : inputValue});
	            if(isValid){
					checkLogin(param ,function(callbackData){
						isValid = callbackData;
						resolve(isValid);	
					});
				}else{
			        resolve(isValid);
				}
	        });
    	})
    };
    function checkLogin(param,callbackData){
		 $.ajax({
		        type: "POST", 
		        url: "/login.do?command=loginCheck",
		        data: JSON.stringify({
					user_id : param[0].login_id
			    }),
			    contentType: "application/json; charset=utf-8",
			    dataType: "json",
		        success: function(data) {
					callbackData(data);
		        },
		        error: function() {
		        }
		    });
	}
})