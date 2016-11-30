// Twitter
!function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);
    js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js,fjs);}}
    (document, 'script', 'twitter-wjs');

$(document).ready(function(){

  // Smooth scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
});




  // Parallax effect
    $('#works').stellar();

 // Tooltips
    $('#tooltip1').tooltip();
    $('[data-toggle="tooltip"]').tooltip();





  //textarea background
// Submit button
  $("#button").on("click", function() {
      console.log("clicked");
        var comment = $(".message-box").val();
          console.log(comment);

          if(comment == "") {
                        $(".message-box").css("border", "2px solid red");
          } else {
                $(".message-box").hide();
                        $("#visible-comment").html("Your message: " + comment);
          };

          return false;
  });

// Running character on message box
  $(".message-box").on("keyup", function() {
    console.log("keyup happened"); //here we make sure we're catching the keyup
        var charCount = $(".message-box").val().length;
        console.log(charCount);

  $("#char-count").html(charCount); //here we show a running character count to the user
    if (charCount > 50) {
          $("#char-count").css("color", "red"); // need to turn character count red
    } else {
          $("#char-count").css("color", "black");// need it to be black
    };

    return false;
 });

    // Work section
for(var i = 0; i < works.length; ++i) {
      $("#work").append("\
        <div class='col-sm-6 col-md-6'>\
          <a href='#' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title:</p>nature\
          </a>\
        </div>\
 ");
     var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};

$(".work-img").mouseenter( function() {
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

// ABOUT ME MAP
 var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 1.303223, lng: 103.8274227},
    zoom: 8
  });
}



