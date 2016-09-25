$(document).ready(function(){

  $('.inner button').on('click', function(){
    var klasa = $(this).attr('class');
    console.log(klasa);
    $('.card').removeClass('showing');
    $('.'+klasa).addClass('showing');
  });

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'Yiruma.mp3');
          //audioElement.load()
          $.get();
          audioElement.addEventListener("load", function() {
          audioElement.play();
          }, true);




          $('.play').click(function() {
          audioElement.play();
          });


          $('.pause').click(function(){
            audioElement.pause();
          });

});
