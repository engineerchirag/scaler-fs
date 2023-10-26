const countWrapperRef = document.querySelector('.counter-wrapper');
const countRef = countWrapperRef.querySelector('.count');
const incrementRef = countWrapperRef.querySelector('.increment');
const decrementRef = countWrapperRef.querySelector('.decrement');
const resetRef = countWrapperRef.querySelector('.reset');
const inputRef = countWrapperRef.querySelector('.change-value-section input');

incrementRef.addEventListener('click', function(ev) {
    const currentValue = countRef.innerText;
    const deltaValue = inputRef.value;
    const newValue = Number(currentValue) + Number(deltaValue);
    countRef.innerText = newValue;
});

decrementRef.addEventListener('click', function(ev) {
    const currentValue = countRef.innerText;
    if (currentValue <= 0) {
        return;
    }
    const deltaValue = inputRef.value;
    const newValue = Number(currentValue) - Number(deltaValue);
    countRef.innerText = newValue;
});

resetRef.addEventListener('click', function(ev) {
    countRef.innerText = 0;
});
