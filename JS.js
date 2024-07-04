let nextdom = document.getElementById('next');
let prevdom = document.getElementById('prev');
let carouseldom = document.querySelector('.carousel');
let listdom = document.querySelector('.carousel .list');
let thumbnaildom = document.querySelector('.carousel .thumbnail');

nextdom.onclick = function() {
    showslider('next');
}
prevdom.onclick = function() {
    showslider('prev');
}

let timerRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextdom.click();
}, timeAutoNext);

function showslider(type) {
    let itemslider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    itemslider.forEach(item => item.classList.remove('active'));

    if (type === 'next') {
        listdom.appendChild(itemslider[0]);
        thumbnaildom.appendChild(itemthumbnail[0]);
        carouseldom.classList.add('next');
        itemslider[1].classList.add('active');
    } else {
        let positionLastItem = itemslider.length - 1;
        listdom.prepend(itemslider[positionLastItem]);
        thumbnaildom.prepend(itemthumbnail[positionLastItem]);
        carouseldom.classList.add('prev');
        itemslider[0].classList.add('active');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouseldom.classList.remove('next');
        carouseldom.classList.remove('prev');
    }, timerRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextdom.click();
    }, timeAutoNext);
}
