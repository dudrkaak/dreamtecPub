

$(document).ready(function(){
    
    $(".slider").bxSlider({        
        mode : "horizontal",
        speed : 700,
        auto : 3000,
        startSlide : 1,
        inginiteLoop : true,
        adaptiveHeight : true,
        adaptiveHeightSpeed : 700, 
        easing : 'ease-in-out',
        pager : true,
        pagerType : 'full', 
        autoControls: false,
        autoStart: true,
        pause: 3000, 
        autoHover: true,
        autoDelay: 1500,
        touchEnabled: true,
        swipeThreshold: 50,
        minSlides : 1,
        maxSlides : 1,
        slideWidth : 1420,
        slideMargin : 10
        
    });

    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $("#menuBox");
    var $checkBox = $("#mui");
    var checkStatus = false;

    $checkBox.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $checkTarget.text("close");
        }else{
            $checkTarget.text("menu");
        }
    });
}

