$(document).ready(function(){
  $('button').on('click', function(){
    var klasa = $(this).attr('class');
    console.log(klasa);
    $('.card').removeClass('showing');
    $('.'+klasa).addClass('showing');
  });

});
