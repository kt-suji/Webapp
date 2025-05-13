// play on load for gallery view


// $('.js-trigger-transition').on('click', function(e) {
//     e.preventDefault();
//     setTimeout(transition, 1000);
//     transition();
//     window.location.href = '  http://localhost/Webapp/HTML/Question.html';
//   window.addEventListener('beforeunload', function (ev) {

//     e.preventDefault();
//     setTimeout(transition, 1000);
//     transition();
    
//     console.log('ページを離れました。');
// });

// });


start()





function time(){
    const delay=1000;
    setTimeout(() => {
    opacity();
    }, delay);
}

function opacity(){
    const main= document.querySelector('main');
    main.classList.toggle('main'); 
}

function start(){
    time();
    document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();  
        setTimeout(transition, 1000);
    transition();
    });
    function transition() {
        var tl = new TimelineMax();
        tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%' }, ease: Power2.easeOut}, 'close')
        .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%' }, ease: Power2.easeOut}, 'close')
        .to($('.loader'), 0.2, {opacity: 1})
        .to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%' }, ease: Power2.easeOut}, '+=1.5', 'open')
        .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%' }, ease: Power2.easeOut}, '-=0.2', 'open')
        .to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
    }

    const textElement = document.querySelector('.btn');

    // マウスオーバー時
    textElement.addEventListener('mouseenter', function() {
        textElement.style.transform = 'scale(1.2)'; // 拡大
    });

    // マウスアウト時
    textElement.addEventListener('mouseleave', function() {
        textElement.style.transform = 'scale(1)'; // 元に戻す
    });
}