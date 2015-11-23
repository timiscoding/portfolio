$(document).ready(function(){
  var bubble = function(event){
    // console.log(event.clientX, event.clientY);
    if (Math.random() < 0.9){
      return;
    }
    var $b = $('<div/>').addClass('bubble');
    var size = Math.random() * 4;
    $b.css({
      left: event.clientX,
      top: event.clientY,
      width: size + 'em',
      height: size + 'em'
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