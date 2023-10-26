// function throttle(func, delay) {
//   let isThrottled = false;
//   return function (msg) {
//     if (!isThrottled) {
//       func(msg);
//       isThrottled = true;
//       setTimeout(() => {
//         isThrottled = false;
//       }, delay);
//     }
//   };
// }
// function logMessage(message) {
//   console.log(message);
// }
// const throttleFunction = throttle(logMessage, 500);

// throttleFunction("Hello");

// setTimeout(() => {
//   throttleFunction("World");
// }, 200);

// setTimeout(() => {
//   throttleFunction("!");
// }, 400);


function debounce(func, delay) {
    let timeoutId;

    return function(msg) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(msg), delay);
    }
}

function logMessage(message) {
    console.log(message);
}

const debouncedFunction = debounce(logMessage, 300);

debouncedFunction('Hello');
debouncedFunction('World');
debouncedFunction('!');