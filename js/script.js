$(function(){
    $('div[href^=#]').click(function(){
      var adjust = 110;
      var speed = 400;
      var href= $(this).attr("href"); //アンカーの値取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });



