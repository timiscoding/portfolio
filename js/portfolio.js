$(document).ready(function(){
  var bubble = function(event){
    // console.log(event.clientX, event.clientY);
    var $b = $('<div/>').addClass('bubble');
    $b.css({
      left: event.clientX,
      top: event.clientY
    });
    $('body').append($b);
    // clean up after ourselves
    setTimeout(function(){
      $b.animate({opacity: 0, top: '-50px'}, 2000, function(){
        $b.remove();
      });
    }, 1400);
  };

  $(window).on('mousemove', bubble);
});