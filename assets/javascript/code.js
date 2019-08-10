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
$("#submit").on("click", function () {
    event.preventDefault();
    console.log('clicked');
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $("#message").val();
    console.log(name);
    console.log(email);
    console.log(message);
    if ($('#name').val() < 1 || $('#email').val() < 1 || $("#message").val() < 1) {
        console.log('required fields empty')
        $("#name").attr("placeholder", "*Required");
        $("#email").attr("placeholder", "*Required");
        $("#message").attr("placeholder", "*Required");

    } else {
        event.preventDefault();
        console.log('valid!')
        $('.formInputs').val('');
        $("#name").attr("placeholder", "Name");
        $("#email").attr("placeholder", "Email");
        $("#message").attr("placeholder", "Message");
        $.ajax({
            url: "https://formspree.io/jj.mateer@live.com",
            method:"POST",
            data: $(this).serialize(),
            dataType: 'json'
        });
        event.preventDefault();
    }

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
    $("#aboutme").prepend("<div id='homeBtnMobile'></div>")
    $("#homeBtnMobile").text("Home");
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
    $("#portfolio").prepend("<div id='homeBtnMobile'></div>")
    $("#homeBtnMobile").text("Home");
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
    $("#contact").prepend("<div id='homeBtnMobile'></div>")
    $("#homeBtnMobile").text("Home");
    $("#homeBtnMobile").on('click', function () {
        $("#homeBtnMobile").remove();
        $('body').animate({
            scrollTop: $("#banner").offset().top
        },
            'slow');

    });
});



