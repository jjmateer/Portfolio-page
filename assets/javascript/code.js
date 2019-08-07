$(document).ready(function () {
    $("#banner").prepend("<btn id='welcomeBtn'>Welcome</btn>")
    $("#contentContainer").hide();
    $("#banner").css("width", "100%");
    $('#welcomeBtn').on('click', function () {
        $("#welcomeBtn").hide();
        $("#nameTag").delay(500).animate({ "opacity": "1" }, 700);
        $(".menu").delay(500).animate({ "opacity": "0.75" }, 700);
        $("#mobileMenu").delay(500).animate({ "opacity": "1" }, 700);
        $("#contentContainer").show();
        $('#banner').css({
            'background-color': 'teal',
        });
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

