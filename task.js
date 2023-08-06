const items = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const arrows = Array.from(document.querySelectorAll('.slider__arrow'));
let indexActiveItem = 0;

arrows.forEach(el => {el.onclick = onClickSliderArrow});
dots.forEach(el => {el.onclick = onClickSliderDot});

setActive();

function onClickSliderArrow() {
    unsetActive();

    if (this.className.includes('slider__arrow_prev')) {
        indexActiveItem--;
        if (indexActiveItem<0) {
            indexActiveItem = items.length - 1;
        }
    } else if (this.className.includes('slider__arrow_next')) {
        indexActiveItem++;
        if (indexActiveItem>=items.length) {
            indexActiveItem = 0;
        }
    }

    setActive();
}

function onClickSliderDot() {
    unsetActive();
    indexActiveItem = dots.indexOf(this);
    setActive();
}

function unsetActive() {
    items[indexActiveItem].className = 'slider__item';
    dots[indexActiveItem].className = 'slider__dot';
}

function setActive() {
    items[indexActiveItem].className = 'slider__item slider__item_active';
    dots[indexActiveItem].className = 'slider__dot slider__dot_active';
}