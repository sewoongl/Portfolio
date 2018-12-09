// 이미지 클릭시 모달 on
$("#mem1Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem1").css("display", "block");                 
});
$("#mem2Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem2").css("display", "block");                 
});
$("#mem3Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem3").css("display", "block");                 
});
$("#mem4Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem4").css("display", "block");                 
});
$("#mem5Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem5").css("display", "block");                 
});
$("#mem6Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem6").css("display", "block");                 
});
$("#mem7Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem7").css("display", "block");                 
});
$("#mem8Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem8").css("display", "block");                 
});
$("#mem9Img").on("click", function(){
    $("#layer").css("display", "block");
    $("#mem9").css("display", "block");                 
});
// 모달 밖 클릭시 레이어 아웃
$("#layer").on("click", function(){
    layerOut();
});
// 레이어 아웃 모듈
function layerOut(){
    $("#layer").css("display", "none");
    $("#mem1").css("display", "none");
    $("#mem2").css("display", "none");
    $("#mem3").css("display", "none");
    $("#mem4").css("display", "none");
    $("#mem5").css("display", "none");
    $("#mem6").css("display", "none");
    $("#mem7").css("display", "none");
    $("#mem8").css("display", "none");
    $("#mem9").css("display", "none");
}