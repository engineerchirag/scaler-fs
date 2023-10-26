// Q1: Implement a function setCancellableInterval, that acts like 
// setInterval but instead of returning a timer ID, it returns a 
// function that when called, cancels the interval. 
// The setCancellableInterval function should have the exact same 
// signature as setInterval:

// setCancellableInterval(callback);
// setCancellableInterval(callback, delay);


function setCancellableInterval(cb, delay) {
    // Implementation
    const timerId = setInterval(cb, delay);
    return function() {
        clearInterval(timerId);
    }
}

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
  console.log('First > ', i);
}, 1000);

setTimeout(() => {
    cancel();
}, 5000);


let j = 0;
// t = 0:
const cancel2 = setCancellableInterval(() => {
  j++;
  console.log('Second > ', j);
}, 1000);

setTimeout(() => {
    cancel2();
}, 10000);
 