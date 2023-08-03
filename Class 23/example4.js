// Question 1:

// Create an animation function continuousAnimation that continuously 
// changes the background color of an element between red and blue. 
// The function should take the element's ID as an argument and update the 
// background color every 500 milliseconds.

// Answer: setInterval

// Question 2:

// Write a function countdownWithClear that takes a positive integer n as an argument.
//  The function should log the numbers from n down to 1, with a delay of 1000 milliseconds 
//  between each log. However, the function should stop logging after 5 seconds 
//  (i.e., when it has logged n, n-1, ..., n-5).

for(var i=0; i<5;i++) {
    setTimeout(() => {
        console.log('A');
    }, 1000);
}

var counter = 0;
const intRef = setInterval(() => {
    counter++;
    console.log('.....');
    if (counter === 5) {
        clearInterval(intRef);
    }
}, 1000);
