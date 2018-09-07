$(document).ready(function(){
   
    $("#spring").on("click", function(){
        alert("pdf파일을 준비중 입니다.");
    });
    
    $("#ppt").on("click", function(){
       window.open("https://youtu.be/WR8vdoAm3ZU","_blank");
   });
    
    $("#think_btn").on("click", function(){
        $("#layer").css("display", "block");
        $("#think_box").css("display", "block");
        $("#think_box_h3").css("display", "block");
        $("#think_box_p").css("display", "block");
    });
        
    //박스 밖 클릭시 돌아가기 기능
    $("#layer").on("click", function(){
        layerOut();
    });
    
});


//레이어 아웃 모듈
function layerOut(){
    $("#layer").css("display", "none");
    $("html").css("opacity", "1");
    $("#think_box").css("display", "none");
    $("#think_box_h3").css("display", "none");
    $("#think_box_p").css("display", "none");
}
    