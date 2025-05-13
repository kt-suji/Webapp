

  // マウスストーカー関連の要素（任意で変更してください）
  const mouseStalker = "#stkr";           // マウスストーカーになる要素を指定
  const mouseTarget = ".stkr-target";     // リンクなどアクションを付けたい要素を指定
  const mouseStalkerArea = "#stkr-area";  // マウスストーカーが機能する要素を指定

  // 処理で使う変数たち
  const stkrSize = parseInt($(mouseStalker).css("width").replace(/px/, ""));
  const stkrPosX = parseInt($(mouseStalker).css("left").replace(/px/, ""));
  const stkrPosY = parseInt($(mouseStalker).css("top").replace(/px/, ""));
  const cssPosAjust = stkrPosX + (stkrSize / 2);
  let stkrFix = false;
  let scale = 1;
  let scroll = 0;

  // 追従用の処理
  $(mouseStalkerArea).hover(function(){
    $(mouseStalkerArea).mousemove(function(e){
      if(stkrFix == false){
        let x = e.clientX - cssPosAjust;
        let y = e.clientY + scroll - cssPosAjust;
        $(mouseStalker).css({
          "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
        });
      }
    });
  }, function(){
    $(mouseStalker).css({
      "transform": ""
    });
  });

  // リンクホバーの処理
  $(mouseTarget).hover(function(){
    stkrFix = true;
    scale = 2;
    let _width = parseInt($(this).css("width").replace(/px/,""));
    let _top = $(this).position().top;
    let _left = $(this).position().left;
    let x = _left - stkrPosX - (stkrSize / 2) + (_width / 2+50);
    let y = (_top - stkrPosX)+60;
    $(mouseStalker).css({
      "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
    }).addClass($(this).data("color"));
  }, function(){
    stkrFix = false;
    scale = 1;
    $(mouseStalker).removeClass($(this).data("color"));
  });

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
  });
 
  const textElement = document.querySelector('button');

// マウスオーバー時
textElement.addEventListener('mouseenter', function() {
    textElement.style.transform = 'scale(1.2)'; // 拡大
});

// マウスアウト時
textElement.addEventListener('mouseleave', function() {
    textElement.style.transform = 'scale(1)'; // 元に戻す
});

transition();
setTimeout(transition, 1000);
function transition() {
var tl = new TimelineMax();

tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%' }, ease: Power2.easeOut}, 'close')
.to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%' }, ease: Power2.easeOut}, 'close')
.to($('.loader'), 0.2, {opacity: 1})
.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%' }, ease: Power2.easeOut}, '+=1.5', 'open')
.to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%' }, ease: Power2.easeOut}, '-=0.2', 'open')
.to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
}
