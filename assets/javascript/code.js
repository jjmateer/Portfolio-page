function hideContent() {
    $("#aboutme").hide();
    $("#portfolio").hide();
    $("#contact").hide();
}
function showContent() {
    $("#aboutme").show();
    $("#portfolio").show();
    $("#contact").show();
    
}
$(document).ready(function () {
    $("#banner").prepend("<btn id='welcomeBtn'>Welcome</btn>")
    $("#welcomeBtn").delay(500).animate({ "opacity": "1" }, 700);
    hideContent();
    $("#banner").css("width", "100%");
    $('#welcomeBtn').on('click', function () {
        $("#welcomeBtn").hide();
        $("#nameTag").delay(500).animate({ "opacity": "1" }, 700);
        $(".menu").delay(500).animate({ "opacity": "0.75" }, 700);
        $("#mobileMenu").delay(500).animate({ "opacity": "1" }, 700);
        showContent();
        $('#banner').css({
            'background-color': 'lightgrey',
        });
    
    });
});
$("#scroll1").on('click',function() {
    $('body').animate({
        scrollTop: $("#banner").offset().top
    },
        'slow');
});
$("#scroll2").on('click',function() {
    $('body').animate({
        scrollTop: $("#aboutme").offset().top
    },
        'slow');
});

$("#scroll3").on('click',function() {
    $('body').animate({
        scrollTop: $("#portfolio").offset().top
    },
        'slow');
});

$("#scroll4").on('click',function() {
    $('body').animate({
        scrollTop: $("#contact").offset().top
    },
        'slow');
});
$("#mobile1").on('click', function() {
    $("#mobileMenu").animate({ "opacity": "0" }, 400);
    
});
$("#mobile2").on('click', function() {
    $("#mobileMenu").animate({ "opacity": "0" }, 400);
});
$("#mobile3").on('click', function() {
    $("#mobileMenu").animate({ "opacity": "0" }, 400);
});


