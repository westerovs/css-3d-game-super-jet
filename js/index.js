(() => {
    const jet = document.querySelector('.jet__body');

    let startRotateY = 78;
    let startRotateX = 14;
    let startRotateZ = -15;

    jet.style.transform = `rotateY(${+startRotateY}deg) rotateX(${+startRotateX}deg rotateZ(${+startRotateZ})`

    document.addEventListener('keydown', function (item) {
        if (item.keyCode === 87) startRotateX += 2;      // W вверх
        else if (item.keyCode === 83) startRotateX -= 2; // S вниз
        else if (item.keyCode === 65) startRotateZ -= 2; // A влево
        else if (item.keyCode === 68) startRotateZ += 2; // D вправо
        else if (item.keyCode === 81) startRotateY -= 2; // Q боком в лево
        else if (item.keyCode === 69) startRotateY += 2; // S боком в право

        jet.style.transform = `rotateY(${+startRotateY}deg) rotateX(${+startRotateX}deg) rotateZ(${+startRotateZ}deg)`
    })
})()

