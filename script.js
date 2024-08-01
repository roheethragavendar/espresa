document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length - 1;
    let refreshSlider;

    const reloadSlider = () => {
        let checkLeft = items[active].offsetLeft;
        list.style.transform = `translateX(-${checkLeft}px)`;

        document.querySelector('.slider .dots li.active').classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshSlider);
        refreshSlider = setInterval(() => {
            next.click();
        }, 5000);
    };

    next.onclick = () => {
        active = active + 1 > lengthItems ? 0 : active + 1;
        reloadSlider();
    };

    prev.onclick = () => {
        active = active - 1 < 0 ? lengthItems : active - 1;
        reloadSlider();
    };

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        });
    });

    reloadSlider();
});
