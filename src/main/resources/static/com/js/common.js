function Mebx(){
}
/*
 *   Mebx.showMessage
 *  화면 오른쪽 하단에 메세지 박스 표시
*/
var title =""; // 메세지 제목
var message = ""; // 메세지 내용
var type =""; // 메세지 타입
var e = {title:"", message:"" ,type:""}; // 파라티터 타입

Mebx.prototype.showMessage = function(e){
    var messageBox = "";
    $(".messageBox_layer").remove();
        messageBox = "<div class='messageBox_layer'><div class='messageBox'><div class='title'>["+e.title+"]</div><div class='message'>"+e.message+"</div></div></div>";
        
        $("body").append(messageBox);

        if("error" === e.type ){
           $(".messageBox_layer").css({"background-color":"rgb(0,0,0,0.8)"})
           $(".messageBox_layer").hover(function () {
            $(this).css({"background-color": "rgb(0, 0, 0)"});
        }, function () {
            // 마우스 떠남 이벤트 처리
            $(this).css({"background-color": "rgb(0, 0, 0, 0.8)"});
        });
          
        }else if("success" === e.type){
            $(".messageBox_layer").css({"background-color":"rgb(100, 218, 0,0.8)"})
            $(".messageBox_layer >.messageBox > .title , .messageBox_layer >.messageBox > .message").css({"text-shadow":"1px 1px 2px rgb(69, 69, 69)"})
            $(".messageBox_layer").hover(function () {
                $(this).css({"background-color": "rgb(100, 218, 0)"});
            }, function () {
                // 마우스 떠남 이벤트 처리
                $(this).css({"background-color": "rgb(100, 218, 0, 0.8)"});
            });
        }
            $(".messageBox_layer").addClass("show");
            
            timeoutSetting("messageBox_layer");
}
function timeoutSetting(calss_name){
	  setTimeout(function () {
                $("."+calss_name).removeClass("show");
            }, 1000);
}
/* 
 * Mebx.infoBar
 *  X 아이콘 애니매이션 설정
*/

Mebx.prototype.infoBarTransition = function(e){
var parent = e.children();
var length = parent.length;
var result = false;
    if(!e.data("active-click")){
        for(var i = 0; i<length; i++){
            var classNm = parent[i].className;
            if(0==i){
                $('.'+classNm).css("transform","rotate(405deg)");
                $('.'+classNm).css("top","calc(50% - 5px)");
            }
            if(1==i){
                $('.'+classNm).css("transform","rotate(-405deg)");
            }
            if(2==i){
                $('.'+classNm).css("transform","rotate(-405deg)");
                $('.'+classNm).css("top","calc(50% - 5px)");
            }
        }
        e.data("active-click" , true);
        result = true;
    }else{
        for(var i = 0; i<length; i++){
            var classNm = parent[i].className;
            if(0==i){
                $('.'+classNm).css("transform","rotate(0deg)");
                $('.'+classNm).css("top","calc(50% - 15px)");
            }
            if(1==i){
                $('.'+classNm).css("transform","rotate(0deg)");
            }
            if(2==i){
                $('.'+classNm).css("transform","rotate(-0deg)");
                $('.'+classNm).css("top","calc(50% - -5px)");
            }
        }
       e.data("active-click" , false);
    }
    return result;
}

/**
 * Mebx.Calender 
 * 달력
 */
Mebx.prototype.Calender = function(e){
   
    
    var date = new Date();
    var nowMonth = 0;
    var nowYear = 0;

    if(undefined !== e){ //prev , next Month 클릭시 
        date = e;
        nowYear = date.getFullYear();
        nowMonth = date.getMonth()+1;
    }else{ // 기본 현재 달력 정보(year , month)
        nowYear = date.getFullYear()
        nowMonth = date.getMonth()+1;
    }
    
    var text_nowMonth = nowMonth; //달력에 월 표시 

    var preMonthEndData = new Date(nowYear, nowMonth-1 ,0); // 전달 마지막날 데이터
    var nowMonthEndData = new Date(nowYear , nowMonth , 0); // 현재달 마지막 날 데이터
    var nowMonthStrData = new Date(nowYear , nowMonth-1 ); // 현재달 첫째날 데이터 
    var nextMonthStrData = new Date(nowYear , nowMonth,1); // 다음달 첫날 데이터
   

    var preEndDay = preMonthEndData.getDate(); // 전달 마지막 날짜
    var endDay = nowMonthEndData.getDate(); // 현재 마지막 날짜
    var endDate =nowMonthEndData.getDay(); //현재 마지막 날 
    var strDate =nowMonthStrData.getDay(); //현재 처음 날
    var nextStrDate = nextMonthStrData.getDate(); // 다음달 첫 날짜

    var weekly_date_html = "";
    
    var preDate_no = 0;
    var nextDate_no = 0;
    if(1 != strDate){
        if(0 == strDate){
            preDate_no = 6;    
        }else{
            preDate_no = strDate - 1;
        }
    }
    if(0 != endDate){
        nextDate_no = 7 - endDate;
    }
    var CalenderBox ='<div id="mebx_calender" class="col-percent-100 row-percent-100">'
                    +'<div class="mebx_calender-top display-flex col-percent-100 justify-content-center text_align-center">'
                    +'<div class="mebx_calender-pre col-px-40 display-flex cursor-pointer" onclick="prevMonth()"><i class="fa-solid fa-angle-left"></i></div>'
                    +'<div class="mebx_calender-top-date col-percent-40 display-flex align-items-center justify-content-center"><span class="mebx_calrender-YEAR">'+nowYear+'</span>년<span class="mebx_calrender-MONTH">'+text_nowMonth+'</span>월</div>'
                    +'<div class="mebx_calender-next col-px-40 display-flex cursor-pointer" onclick="nextMonth()"><i class="fa-solid fa-angle-right"></i></div>'
                    +'</div>'
                    +'<div class="mebx_calender-week display-flex col-percent-100 justify-content-center text_align-center">'
                    +'<div class="mebx_calender-week_content">월</div>'
                    +'<div class="mebx_calender-week_content">화</div>'
                    +'<div class="mebx_calender-week_content">수</div>'
                    +'<div class="mebx_calender-week_content">목</div>'
                    +'<div class="mebx_calender-week_content">금</div>'
                    +'<div class="mebx_calender-week_content">토</div>'
                    +'<div class="mebx_calender-week_content">일</div>'
                    +'</div>'
                    +'<div id ="mebx_calender-weekly_box" class="mebx_calender-weekly display-flex col-percent-100 text_align-center">'
                    +'</div>'
                    +'</div>'

   $("#Mebx_Calender").html(CalenderBox);

    //  현재 달력의 남은 부분 전 달 날짜로 채워 넣기
    for(var j = preDate_no; j--;){
        weekly_date_html += '<div class="mebx_calender-weekly_date-layer">'
                           +'<div class="mebx_calender-weekly_date mebx_calender-weekly_pre_date">'+(preEndDay-j)+'</div>'
                           +'</div>';

    }
    // 현재 달력 출력
    for(var i =1; i < endDay+1; i++){
        weekly_date_html += '<div class="mebx_calender-weekly_date-layer">'
                            +'<div class="mebx_calender-weekly_date" data-detail-status="false" data-nowdate="'+i+'">'
                                +'<div class="mebx_day display-flex justify-content-center align-items-center">'+i+'</div>'
                                +'<div class="mebx-day_schedule display-flex align-items-center"></div>'
                            +'</div>'
                           +'</div>'
    }

    //  현재 달력의 끝부분 남는 부분 다음 달 날짜로 채워 넣기 
    for(var k =0; k<nextDate_no; k++){
        weekly_date_html += '<div class="mebx_calender-weekly_date-layer">'
                            +'<div class="mebx_calender-weekly_date mebx_calender-weekly_next_date">'+(nextStrDate+k)+'</div>'
                            +'</div>'
    }                       
    $("#mebx_calender-weekly_box").html(weekly_date_html);
    toDayCheck();
    addSchedule(nowYear,nowMonth);
   
    
    // 날짜 클릭시 일정 디테일 생성 이벤트
    $(".mebx_calender-weekly_date").on("click",function(e){
        var detail_cnt = $(".mebx_schedule_detail").length;
        var day = $(this).data("nowdate");
        var detailStatus = $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").data("detail-status");
        
        if(1 <= detail_cnt){
            $(".mebx_calender-weekly_date").parent().children(".mebx_schedule_detail").remove();
            $(".mebx_calender-weekly_date").data("detail-status", false);

            var detailHtml = '<div class="mebx_schedule_detail">'
                                +'<div class="mebx_schedule_detail-cancel_button"><i class="fa-solid fa-xmark"></i></div>'
                                +'<div class="mebx_schedule_detail-title_box display-flex ">'
                                +'<div class="display-flex row-percent-20">'
                                +'<input class="mebx_schedule_detail-title " placeholder="이벤트를 입력해 주세요"/>'
                                +'<div class="color-preview"></div><select class="mebx_schedule_detail-color_selector col-percent-20"></select>'
                                +'</div>'
                                +'<input class="mebx_schedule_detail-start_time" type="time">'
                                +'<input class="mebx_schedule_detail-end_time" type="time">'
                                +'<div class="mebx_schedule_detail-text row-percent-30"></div>'
                                +'</div>';

            $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").parent().append(detailHtml);
            $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").data("detail-status", true);
        }else{
            if (detailStatus) {
                $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").parent().children(".mebx_schedule_detail").remove();
                $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").data("detail-status", false);
            } else {
                var detailHtml = '<div class="mebx_schedule_detail">'
                                +'<div class="mebx_schedule_detail-cancel_button"><i class="fa-solid fa-xmark"></i></div>'
                                +'<div class="mebx_schedule_detail-title_box display-flex ">'
                                +'<div class="display-flex row-percent-20">'
                                +'<input class="mebx_schedule_detail-title " placeholder="이벤트를 입력해 주세요"/>'
                                +'<div class="color-preview"></div><select class="mebx_schedule_detail-color_selector col-percent-20"></select>'
                                +'</div>'
                                +'<input class="mebx_schedule_detail-start_time" type="time">'
                                +'<input class="mebx_schedule_detail-end_time" type="time">'
                                +'<div class="mebx_schedule_detail-text row-percent-30"></div>'
                                +'</div>';
                $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").parent().append(detailHtml);
                $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").data("detail-status", true);
            }
        }

        colorSerlrctor("mebx_schedule_detail-color_selector");
        resetTime("mebx_schedule_detail-start_time" , "mebx_schedule_detail-end_time");
        $(".mebx_schedule_detail-color_selector").change(function() {
            var selectedColor = $(this).val();
            $(".color-preview").css("--value", selectedColor);
        });
        $(".mebx_schedule_detail-cancel_button").on("click",function(){
            $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").parent().children(".mebx_schedule_detail").remove();
            $(".mebx_calender-weekly_date[data-nowdate='"+day+"']").data("detail-status", false);
        })
    })
}

/**
 * Mebx.Calender.colorSelector
 * 일정 detail 박스에 초기 시간 셋팅
 */
function colorSerlrctor(e){
    var colorOptions = [{ value: "#FF0000", text: "Red" },
                        { value: "#0000FF", text: "Blue" },
                        { value: "#00FF00", text: "Green" },
                        { value: "#FFFF00", text: "Yellow" },
                        { value: "#FFA500", text: "Orange" }];
    var options = '';
    for(var i = 0;  i < colorOptions.length; i++){i
        options += '<option value="'+colorOptions[i].value+'">'+colorOptions[i].text+'</option>';
    }
    $("."+e).append(options);
}

/**
 * Mebx.Calender.resetTime
 * 일정 detail 박스에 초기 시간 셋팅
 */
function resetTime(startTime , endTime){
    $("."+startTime).val("12:00");
    $("."+endTime).val("13:00");
}
/**
 * Mebx.Calender.toDayCheck
 * 달력에 오늘 날짜 표시 해주는 함수 
 */
function toDayCheck(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var today = date.getDate();
    
    var checkYear = parseInt($(".mebx_calrender-YEAR").text());
    var checkMonth = parseInt($(".mebx_calrender-MONTH").text());

    //현재 년,월이 달력의 checkYear ,checkMonth 가 각가 같으면 today(오늘)을 표시 해준다.
    if(checkYear == year && checkMonth == month){
        $(".mebx_calender-weekly_date[data-nowdate='"+today+"'] > .mebx_day").css(
            {
                "background":"rgb(255,0,0)"
                ,"border-radius":"100%"
                ,"color":"#fff"
                ,"width":"20%"
            }
        );
        $(".mebx_calender-weekly_date[data-nowdate='"+today+"'] > .mebx_day").parent().css(
            {
                "border": "1px solid #d1d1d1"
                ,"box-shadow": "0px 0px 8px #0000003b"
            }
        )
    }


}

/**
 * Mebx.Calender.addSchedule
 * 일정 사입
 */
function addSchedule(year , month){
    var tableData = [
                        {
                            "target_yyyy":year
                            ,"target_mm":month
                            ,"target_dt":"21"
                            ,"memo":"영이랑 점심약속"
                        },
                        {
                            "target_yyyy":year
                            ,"target_mm":month
                            ,"target_dt":"20"
                            ,"memo":"영이랑 점심약속"
                        },
                        {
                            "target_yyyy":year
                            ,"target_mm":month
                            ,"target_dt":"22"
                            ,"memo":"영이랑 점심약속"
                        }
                    ]; // 테이블 연동시 데이터 매핑 해줄 변수
    var mebx_schedule_data = ""; 

    // 테이블에서 일정 조회 로직 추가 부분 -------
    //console.log(year ,"::", month);
    // 테이블에서 일정 조회 로직 추가 부분 -------

    if(tableData.length != 0){
        for(var i =0; i<tableData.length; i++){
            var schedule_date = tableData[i].target_dt
            mebx_schedule_data  ='<div class="display-flex align-items-center"><i class="fa-regular fa-circle"></i>'+tableData[i].memo+'</div>';
            $(".mebx_calender-weekly_date[data-nowdate="+schedule_date+"] > .mebx-day_schedule").append(mebx_schedule_data);
        }
    }
}
/**
 * Mebx.Calender.prevMonth
 * 전달 조회 
 */
function prevMonth() {
    var year = parseInt($(".mebx_calrender-YEAR").text());
    var month = parseInt($(".mebx_calrender-MONTH").text())-1;
    var date = new Date(year,month-1);
    var mebx = new Mebx();
    mebx.Calender(date);
}
/**
 * Mebx.Calender.nextMonth
 * 다음달 조회
 */
function nextMonth() {
    var year = parseInt($(".mebx_calrender-YEAR").text());
    var month = parseInt($(".mebx_calrender-MONTH").text())+1;
    
    var date = new Date(year,month-1);
    var mebx = new Mebx();
    mebx.Calender(date);
}


/*
 * nav tab 
 * */   

Mebx.prototype.nav_tab = function(){
    $(".nav-link").click(function(){
        var parent = $(this).parent();
        var active_flag = parent.hasClass("nav_active");

        if(!active_flag){
            $(".main-content-nav-items").removeClass("nav_active");
            parent.addClass("nav_active");
        }
    });

}
/**
 * view-popup_close  event
 */
Mebx.prototype.btn_popup_close = function(){
    $(".view-popup_close").click(function(){
        if(!$("#view-popup").hasClass("hidden")){
            $("#view-popup").addClass("hidden");
        }else{
            $("#view-popup").removeClass("hidden");
        }

    })
}
Mebx.prototype.btn_popup_open = function(){
    console.log("hihihi")
    console.log($(".view-popup_open"))
    $(".view-popup_open").click(function(){
        console.log($("#view_popup").hasClass("hidden"))
        if($("#view-popup").hasClass("hidden")){
            $("#view-popup").removeClass("hidden");
        }else{
            $("#view-popup").addClass("hidden");
        }

    })
}