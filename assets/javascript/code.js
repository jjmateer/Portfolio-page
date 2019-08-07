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
    $("#banner").prepend("<div id='welcomeDisplay'>Welcome</div>")
    $("#banner").append("<btn id='welcomeBtn'>Enter site</btn>")
    $("#welcomeDisplay").delay(500).animate({ "opacity": "1" }, 700);
    $("#welcomeBtn").delay(1000).animate({ "opacity": "1" }, 1000);
    hideContent();
    $("#banner").css("width", "100%");
    $('#welcomeBtn').on('click', function () {
        $("#welcomeDisplay").animate({ "opacity": "0" }, 1000);
        $("#welcomeBtn").animate({ "opacity": "0" }, 1000);
        $("#nameTag").delay(500).animate({ "opacity": "1" }, 1000);
        $(".menu").delay(500).animate({ "opacity": "0.75" }, 1000);
        $("#mobileMenu").delay(500).animate({ "opacity": "1" }, 1000);
        showContent();
        $('#banner').css({
            'background-color': 'lightgrey',
        });

    });
});
$("#scroll1").on('click', function () {
    $('body').animate({
        scrollTop: $("#banner").offset().top
    },
        'slow');
});
$("#scroll2").on('click', function () {
    $('body').animate({
        scrollTop: $("#aboutme").offset().top
    },
        'slow');
});

$("#scroll3").on('click', function () {
    $('body').animate({
        scrollTop: $("#portfolio").offset().top
    },
        'slow');
});

$("#scroll4").on('click', function () {
    $('body').animate({
        scrollTop: $("#contact").offset().top
    },
        'slow');
});
$("#mobile1").on('click', function () {
    $('body').animate({
        scrollTop: $("#aboutme").offset().top
    },
        'slow');
    $("#aboutme").append("<btn id='homeBtnMobile'>Home</btn>")
    $("#homeBtnMobile").on('click', function () {
        $("#homeBtnMobile").remove();
        $('body').animate({
            scrollTop: $("#banner").offset().top
        },
            'slow');

    });

});
$("#mobile2").on('click', function () {
    $('body').animate({
        scrollTop: $("#portfolio").offset().top
    },
        'slow');
    $("#portfolio").append("<btn id='homeBtnMobile'>Home</btn>")
    $("#homeBtnMobile").on('click', function () {
        $("#homeBtnMobile").remove();
        $('body').animate({
            scrollTop: $("#banner").offset().top
        },
            'slow');

    });

});
$("#mobile3").on('click', function () {
    $('body').animate({
        scrollTop: $("#contact").offset().top
    },
        'slow');
    $("#contact").append("<btn id='homeBtnMobile'>Home</btn>")
    $("#homeBtnMobile").on('click', function () {
        $("#homeBtnMobile").remove();
        $('body').animate({
            scrollTop: $("#banner").offset().top
        },
            'slow');

    });
});
         




