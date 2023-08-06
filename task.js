const items = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const arrows = Array.from(document.querySelectorAll('.slider__arrow'));

arrows.forEach(el => {el.onclick = onClickSliderArrow});
dots.forEach(el => {el.onclick = onClickSliderDot});

setActive(0);

function getIndexActiveItem() {
    return items.findIndex(item => item.className.includes('slider__item_active'));
}

function onClickSliderArrow() {
    let indexActiveItem = getIndexActiveItem();

    unsetActive(indexActiveItem);

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

    setActive(indexActiveItem);
}

function onClickSliderDot() {
    unsetActive(getIndexActiveItem());
    setActive(dots.indexOf(this));
}

function unsetActive(index) {
    if (index < 0) return;
    items[index].className = 'slider__item';
    dots[index].className = 'slider__dot';
}

function setActive(index) {
    if (index < 0) return;
    items[index].className = 'slider__item slider__item_active';
    dots[index].className = 'slider__dot slider__dot_active';
}