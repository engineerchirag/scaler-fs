// Example 1:

console.log('A');
console.log('B');
setTimeout(() => {
    console.log('D');
}, 1000);
console.log('E');

// setTimeout, setInterval, fetch, Promise

// Question 2:
function log(text) {
    console.log(text);
  }
  
  setTimeout(() => {
      log('D');
  }, 0);
  
  
  setTimeout(() => {
    log('E');
  });
  
  
  for (var i=0; i<10; i++) {
    log(i);
  }

  // Question 3:


  console.log('A');
  console.log('B');
  setInterval(() => {
    console.log('I')
  }, 1000);
  console.log('C');
  