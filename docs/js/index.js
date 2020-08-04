// スクロール量を取得する要素を取得
var scrollElm = (function() {
    if('scrollingElement' in document) {
      return document.scrollingElement;
    }
    if(navigator.userAgent.indexOf('WebKit') != -1) {
      return document.body;
    }
    return document.documentElement;
  })();
  
  // 全てのセクション要素を取得
  var sections = document.querySelectorAll('.section');
  
  // 全体をz方向に動かす#scaler要素を取得
  var scaler = document.getElementById('scaler');
  
  // 画面の高さを設定する#scroll要素を取得
  var scrollDiv = document.getElementById('scroll');
  
  // セクション要素のdata-z属性を取得し、transformを設定
  // 最後のセクション要素のdata-zを元に、画面の高さを計算して設定
  for(var i = 0; sections.length > i; i++) {
    var itemZ = sections[i].getAttribute('data-z');
    sections[i].style.transform = 'translateZ(' + - itemZ + 'px)';
    if(i === sections.length -1) {
      scrollDiv.style.height = itemZ * 100 + window.innerHeight + 'px';
    }
  }
  
  // スクロールイベントで、#scaler要素のtransformでz軸を動かす
  window.addEventListener('scroll', function() {
    scaler.style.transform = 'translateZ(' + scrollElm.scrollTop / 100 + 'px)';
  });
  
  $('#animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
$('#animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 500){
   $(this).addClass("fadeInDown");
  }
 });
});
  