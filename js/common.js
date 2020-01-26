$(document).ready(function(){
  $('.sliders').slick({
  	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  });
  // $('.mob-menu').click(function(e){
	// e.preventDefault();
	// $('#overlay').css('display', 'block');
	// $('nav').addClass('dbbl');
	// $('body').css('overflow', 'hidden');
	// $('.of_wrap').css('overflow', 'hidden');
  // });
  $('.mob-menu').click(function(e){
  e.preventDefault();
  $('#overlay').toggleClass('dbbl');
  $('nav').toggleClass('dbbl');
  $('body').toggleClass('ovrlhdn');
  $('.of_wrap').toggleClass('ovrlhdn');
   $('html').toggleClass('ovrlhdn');
  });
  $('#overlay').click(function(e){
  	$('nav').toggleClass('dbbl');
  	$(this).toggleClass('dbbl');
  	$('body').toggleClass('ovrlhdn');
  	$('.of_wrap').toggleClass('ovrlhdn');
  $('html').toggleClass('ovrlhdn');
  });

$("nav ul li").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    if($('body').width() <= 700){
      $('nav').toggleClass('dbbl');
    $('#overlay').toggleClass('dbbl');
    $('body').toggleClass('ovrlhdn');
    $('.of_wrap').toggleClass('ovrlhdn');
      $('html').toggleClass('ovrlhdn');
    }
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
$('.top_arrow a').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })
});
