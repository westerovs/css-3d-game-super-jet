// (function () {
//     const box = document.querySelector('.box');
//     let rotateY = 30;
//     let rotateX = 10;
//     let rotateZ = 30;
//
//     box.style.transform =
//         `rotateY(${+rotateY}deg) rotateX(${+rotateX}deg) `
//
//     document.onkeydown = function (item) {
//         if (item.keyCode === 37) rotateY -= 2;     // влево
//         else if (item.keyCode === 39) rotateY += 2; // вправо
//         else if (item.keyCode === 38) rotateX += 2; // вверх
//         else if (item.keyCode === 40) rotateX -= 2; // вниз
//
//         box.style.transform =
//             `rotateY(${+rotateY}deg)
//              rotateX(${+rotateX}deg)
//              rotateZ(${+rotateZ}deg)
//              `
//     };
// })();
