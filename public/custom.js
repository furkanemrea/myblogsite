$(document).ready(function(){
    $(window).scroll(function(){
       
        var mesafe=$(window).scrollTop();
        if(mesafe>80){
            
            $(".yukari_cik").fadeIn();
        }
        else{
            $(".yukari_cik").fadeOut();
        }
    });
    $(".yukari_cik").click(function(){
        $("html").animate({
            scrollTop:0
        });
    })
})