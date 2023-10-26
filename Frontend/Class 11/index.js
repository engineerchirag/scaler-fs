const h1Title = document.getElementById('title');
h1Title.innerText = 'Book My Class';
// h1Title.style.backgroundColor = 'blue';
h1Title.style.color = 'red';
console.log(h1Title);




const h3Element = document.createElement('h3');
h3Element.innerText = 'Chirag Goel';

const headingSection = document.querySelector('.heading-section');
headingSection.appendChild(h3Element);




// Show alert with "hi" message on click on window
document.addEventListener('click', function(event){
    alert('hi')
});

// Change theme

let darkMode = false;
function darkenBackground() {
    var bodyRef = document.querySelector('body');
    // bodyRef.style.backgroundColor = 'black';
    bodyRef.classList.add('black');
    bodyRef.classList.remove('white');
    darkMode = true;
}

function ligthenBackground() {
    var bodyRef = document.querySelector('body');
    // bodyRef.style.backgroundColor = 'white';
    bodyRef.classList.add('white');
    bodyRef.classList.remove('black');
    darkMode = false;
}

const buttonRef = document.querySelector('.darkModeButton');

buttonRef.addEventListener('click', function() {
    if (darkMode) {
        ligthenBackground();
    } else {
        darkenBackground();
    }
});


// Change font config
function increateFontSize() {
    const titleRef = document.getElementById('title');
    titleRef.style.fontSize = '100px';
}

const textConfigRef = document.querySelector('.textConfig');
textConfigRef.addEventListener('click', function() {
    increateFontSize();  
})


// Change font background color on hover
function backTitleBgColor() {
    const titleRef = document.getElementById('title');
    titleRef.style.backgroundColor = 'green';
}

function resetTitleBgColor() {
    const titleRef = document.getElementById('title');
    titleRef.style.backgroundColor = 'transparent';
}

document.querySelector('#title').addEventListener('mouseover', function() {
    backTitleBgColor();  
});

document.querySelector('#title').addEventListener('mouseout', function() {
    resetTitleBgColor();  
});


// Add eventlistener to each element in the list

const moviesRef = document.querySelectorAll('.movies');

moviesRef.forEach(function(itemRef) {
    itemRef.addEventListener('click', function(ev) {
        alert(ev.currentTarget.querySelector('.price').innerText);
    });
});

document.querySelector('select').addEventListener('change', function(e) {
    console.log(e.target.value);
})








