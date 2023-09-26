function animateValue(element, start, end, duration) {
    let startTime;
    
    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

const elements = document.querySelectorAll('.number');

elements.forEach((element) => {
    const endValue = parseInt(element.getAttribute('data-number'));
    animateValue(element, 0, endValue, 2000);
});