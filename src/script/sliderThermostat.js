let app = (() => {

    function updateSlider(element) {
        if (element) {
            let parent = element.parentElement,
                lastValue = parent.getAttribute('data-slider-value');

            if (lastValue === element.value) {
                return; // No value change, no need to update then
            }

            parent.setAttribute('data-slider-value', element.value);
            let $thumb = parent.querySelector('.range-slider__thumb'),
                pct = element.value * ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight);

            $thumb.style.bottom = `${pct}%`;
        }
    }
    return {
        updateSlider: updateSlider
    };

})();

(function initAndSetupTheSliders() {
    const inputs = [].slice.call(document.querySelectorAll('.range-slider input'));
    inputs.forEach(input => input.setAttribute('value', '23'));
    inputs.forEach(input => app.updateSlider(input));

    inputs.forEach(input => input.addEventListener('input', element => app.updateSlider(input)));
    inputs.forEach(input => input.addEventListener('change', element => app.updateSlider(input)));
})();