const smileys = ['😢', '😞', '😐', '😀', '😎'];
const smileyRef = document.querySelector('.smiley');
const ratingSectionRef = document.getElementById('rating-section');

let hoveredValue = 0;
let selectedStarValue = 0;

function createStars() {
    smileys.forEach((item, idx) => {
        const newStarElementRef = document.createElement('div');
        newStarElementRef.classList.add('rating-box', 'empty-star');
        // newStarElementRef.setAttribute('class', 'rating-box empty-star')
        newStarElementRef.setAttribute('data-id', idx + 1);
        ratingSectionRef.appendChild(newStarElementRef);
    });
}

ratingSectionRef.addEventListener('mouseover', function(ev) {
    if (ev.target.classList.contains('rating-box')) {
        const currentStarIndex = ev.target.dataset.id;
        hoveredValue = currentStarIndex;
        rerenderStars();    
    }
});

ratingSectionRef.addEventListener('mouseleave', function(ev) {
    hoveredValue = 0;
    rerenderStars();
});

ratingSectionRef.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('rating-box')) {
        const currentStarIndex = ev.target.dataset.id;
        selectedStarValue = currentStarIndex;
        rerenderStars();    
        smileyRef.innerText = smileys[selectedStarValue - 1];
    }
});

function rerenderStars() {
    const ratingBoxes = document.querySelectorAll('.rating-box');
    [...ratingBoxes].forEach((boxRef, idx) => {
        const highlightIndex = hoveredValue || selectedStarValue;
        if (highlightIndex > idx) {
            boxRef.classList.add('fulled-star');
            boxRef.classList.remove('empty-star');
        } else {
            boxRef.classList.remove('fulled-star');
            boxRef.classList.add('empty-star');
        }
    });
}

createStars();