$(function(){
  $(".slider").slick({
    // centerMode: true,
    // centerPadding: '10%'
    slidesToShow:3,
    dots: true

  });
});

$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

var userAgent = window.navigator.userAgent.toLowerCase();

if ((/msie | trident/).test(userAgent) != false) {
    console.log('Internet Explorerをお使いですね');
} else if(userAgent.indexOf('edge') != -1) {
    console.log('Edgeをお使いですね');
} else if(userAgent.indexOf('chrome') != -1) {
    console.log('Google Chromeをお使いですね');
} else if(userAgent.indexOf('safari') != -1) {
    console.log('Safariをお使いですね');
} else if(userAgent.indexOf('firefox') != -1) {
    console.log('FireFoxをお使いですね');
} else if(userAgent.indexOf('opera') != -1) {
    console.log('Operaをお使いですね');
} else {
    console.log('そんなブラウザは知らん');
}
