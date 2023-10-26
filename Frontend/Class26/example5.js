// Q: Create a function that logs a message after a 
// specified delay.


function delayedLog(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay)   
}

delayedLog('I', 1000);
delayedLog('Luv', 2000);
delayedLog('U', 3000);