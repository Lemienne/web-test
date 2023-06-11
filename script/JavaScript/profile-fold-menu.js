$(document).ready(function(){
    $(".h-profile-tri").click(function(){
        if($(".profile-menu-area").is(":visible")){
            $(".profile-menu-area").css("display","none");
        }
        else{
            $(".profile-menu-area").css("display","block");
        }
    });
    $(document).mouseup(function (e){
        if($(".profile-menu-area").has(e.target).length === 0){
            $(".profile-menu-area").hide();
        }
    });
    $(document).keydown(function(e){
        //keyCode 구 브라우저, which 현재 브라우저
        var code = e.keyCode || e.which;

        if (code == 27) { // 27은 ESC 키번호
            $('.profile-menu-area').hide();
        }
    });
});