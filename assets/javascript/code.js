$(document).ready(function () {
    $("#banner").append("<btn id='welcomeBtn'>Welcome</btn>")
    $("#contentContainer").hide();
    $('#welcomeBtn').on('click', function() {
        $("#welcomeBtn").hide();
        $("#nameTag").delay(500).animate({ "opacity": "1" }, 700);
        $("#menu").delay(500).animate({ "opacity": "0.75" }, 700);
        $("#contentContainer").show();
    });
    
    

});
