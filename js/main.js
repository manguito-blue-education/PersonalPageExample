$(document).ready(function(){

  $window = $(window);

  var windowWidth = $window.width(),
  windowHeight = $window.height(),
  r_w = windowHeight/windowWidth,
  i_w = 960,
  i_h = 540,
  r_i = i_h/i_w,
  new_w, new_h, new_left, new_top;

  if(r_w > r_i){
    new_h = windowHeight;
    new_w = windowHeight/r_i;
  }else{
    new_h = windowWidth*r_i;
    new_W = windowWidth
  }

  $('#videowrapper').css({
    width:'100%',
    height:'100%',
    overflow: 'hidden',
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0
  });

  $('video').css({
    width:new_w,
    height:new_h,
    left:(windowWidth - new_w)/2,
    top:(windowHeight-new_h)/2
  });

})
