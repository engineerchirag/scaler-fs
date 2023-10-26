var bodyRef = document.querySelector('body');
console.log(bodyRef.innerText);

var spanRef = document.createElement('span');
spanRef.innerText = 'Script1 Location';
bodyRef.appendChild(spanRef);

// for(var i = 0; i< 100000; i++) {
//     console.log(i);
// }

// console.log(1);