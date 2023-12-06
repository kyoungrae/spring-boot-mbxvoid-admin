<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:layout>
   <!-- main -->
   <div class="main-body">
    <section class="main-content">
        <article class="main-content-title-box">
            <div class="main-content-path"><span>Project/OverView</span></div>
            <span class="main-content-title">OverView</span>
        </article>
        <article class="main-content-nav_tab">
            <ul class="main-content-nav display-flex">
                <li class="main-content-nav-items nav_active">
                    <a class="nav-link" href="javascript:void(0);">
                        Project
                        <span class="nav-total_text nav-link-sub"></span>
                    </a>
                </li>
                <li class="main-content-nav-items">
                    <a class="nav-link" href="javascript:void(0);">TimeLine</a>
                </li>
            </ul>
        </article>
        <article class="main-contents main-content-total-box display-flex align-items-center">
            <div class="main-content-total">
                <span class="total_text"></span>
            </div>
            <div class="col-percent-15">
                <span class="total_text_sub">Total project</span>
            </div>
            <div class="main-content-total-progressbar-box col-percent-100">
                <div class="main-content-total-progressbar-text">
                    <ul class="progressbar-box display-flex">
                        <li class="inprogress-text"><span>In progress</span><span>(10)</span></li>
                        <li class="completed-text"><span>Completed</span>(10)</li>
                        <li class="todo-text"><span>To do</span>(0)</li>
                    </ul>
                    <div class="main-content-total-progressbar display-flex">
                        <div class="inprogress col-percent-10"></div>
                        <div class="completed col-percent-80"></div>
                        <div class="todo col-percent-10"></div>
                    </div>
                </div>
            </div>
        </article>
        <article class="main-contents main-content-contents"> 
            <div class="main-content-contents-nav display-flex">
                <input class="col-percent-5" type="checkbox" name="project_name">
                <div class="project-status-box col-percent-95">
                    <ul class="project-status display-flex col-percent-100">
                        <li class="col-percent-30">PROJECT</li>
                        <li class="col-percent-20">COMPANY</li>
                        <li class="col-percent-10">MEMBER</li>
                        <li class="col-percent-15">STATUS</li>
                        <li class="col-percent-20">COMPLETION</li>
                        <li class="col-percent-5">FILE</li>
                    </ul>
                </div>
            </div>
            <div class="append-main-content-projects"></div>
        </article>
    </section>
    <article id="view-popup" class="hidden">
        <div class="view-popup-body-box">
            <div class="view-popup-body row-percent-90">
                <div class="view-popup_title col-percent-100 row-percent-10">
                    <span id="view-prj_nm">POMA - LMS</span>
                </div>
                <div class="display-flex flex-direction-column">
                    <div class="view-popup-contents">
                        <span class="view-popup-content_title">발주처</span>
                        <span id="view-company" class="view-popup-content_text"></span>
                    </div>
                    <div class="view-popup-contents view-popup_period">
                        <span class="view-popup-content_title">기간</span>
                        <span id="view-period" class="view-popup-content_text"></span>
                    </div>
                    <div class="view-popup-contents">
                        <span class="view-popup-content_title">참여인원</span>
                        <span id="view-member" class="view-popup-content_text"></span>
                    </div>
                    <div class="view-popup-contents">
                        <span class="view-popup-content_title">기여도</span>
                        <span id="view-contribution" class="view-popup-content_text"></span>
                    </div>
                </div>
                <div class="view-popup-contents">
                    <span class="view-popup-content_title">사용기술</span>
                    <span id="view-skill" class="view-popup-content_text dis"></span>
                </div>
                <div class="view-popup-contents">
                    <span class="view-popup-content_title">담당업무</span>
                    <span id="view-assigned_task" class="view-popup-content_text"></span>
                </div>
                <div class="view-popup-contents">
                    <span class="view-popup-content_title">내용</span>
                    <span id="view-cont" class="view-popup-content_text"></span>
                </div>
            </div>
            <footer class="view-popup-footer row-percent-10">
                <button class="btn view-popup_close" type="button"><i class="fa-solid fa-xmark">닫기</i></button>
            </footer>
        </div>
    </article>
</div>
<script>
$(document).ready(function() {
    searchContents();
})
var data_obj = [];
function searchContents(){
    $.ajax({
    type: "POST",
    url: "/project/searchProject",
    data: JSON.stringify({}),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
})
    .done(function(data) {
        // Success callback
        data_obj = data;
        console.log(data);
        var contentsHtml = "";
        for (var i = 0; i < data.length; i++) {
            contentsHtml += '<div class="main-content-projects display-flex">'
                            + '<input class="col-percent-5" type="checkbox" name="project_name"/>'
                            + '<div class="project-status-box col-percent-95">'
                                + '<ul class="project-status display-flex col-percent-100">'
                                    + '<li class="col-percent-30"><a class="view-popup_open" data-prj-no="'+data[i].prj_no+'" href="javascript:void(0)">'+data[i].prj_nm+'</a></li>'
                                    + '<li class="col-percent-20"><span>'+data[i].company+'</span></li>'
                                    + '<li class="col-percent-10"><span>'+data[i].member+'</span></li>'
                                    + '<li class="completed-text col-percent-15"><span>'+data[i].status+'</span></li>'
                                    + '<li class="col-percent-20 display-flex align-items-center">'
                                        + '<span class="display-block col-percent-30">'+data[i].completion+'</span>'
                                        + '<div class="col-percent-70">'
                                            + '<div class="completed col-percent-100"></div>'
                                        + '</div>'
                                    + '</li>'
                                    + '<li class="col-percent-5"></li>'
                                + '</ul>'
                            + '</div>'
                        + '</div>';
        }
        $(".total_text").append(data.length);
        $(".nav-total_text").append(data.length);
        $(".append-main-content-projects").append(contentsHtml);
        var mebx = new Mebx();
            mebx.nav_tab();
            mebx.btn_popup_close();
            // mebx.btn_popup_open();
            btn_popup_open(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Error callback
        console.error("Error:", textStatus, errorThrown);
    });
}
function btn_popup_open(data){
    $(".view-popup_open").click(function(){
        var prj_no = $(this).data("prj-no");
        for(var i =0; i< data.length; i++){
            if(data[i].prj_no == prj_no){
                $("#view-prj_nm").html(data[i].prj_nm);
                $("#view-company").html(data[i].company);
                $("#view-period").html(data[i].period_from+" - "+data[i].period_to);
                $("#view-member").html(data[i].member);
                $("#view-contribution").html(data[i].contribution+"%");
                $("#view-skill").html(data[i].skill);
                $("#view-assigned_task").html(data[i].assigned_task);
                $("#view-cont").html(data[i].cont);
                break;
            }
        }
        if($("#view-popup").hasClass("hidden")){
            $("#view-popup").removeClass("hidden");
        }else{
            $("#view-popup").addClass("hidden");
        }

    })
}


</script>
</t:layout>