// const button=document.querySelector(".button");
// document.querySelector('button').addEventListener('click',()=>{
//     button.style.width("20%");
//     button.style.height("2em");
// });

 
const textElement1 = document.querySelector('#return');
// マウスオーバー時
textElement1.addEventListener('mouseenter', function() {
    textElement1.style.transform = 'scale(1.2)'; // 拡大
});

// マウスアウト時
textElement1.addEventListener('mouseleave', function() {
    textElement1.style.transform = 'scale(1)'; // 元に戻す
});
const textElement2 = document.querySelector('#retry');
// マウスオーバー時
textElement2.addEventListener('mouseenter', function() {
    textElement2.style.transform = 'scale(1.2)'; // 拡大
});

// マウスアウト時
textElement2.addEventListener('mouseleave', function() {
    textElement2.style.transform = 'scale(1)'; // 元に戻す
});