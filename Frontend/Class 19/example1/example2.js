var bodyRef = document.querySelector('body');
console.log(bodyRef.innerText);

var spanRef = document.createElement('span');
spanRef.innerText = 'Script2 Location';
bodyRef.appendChild(spanRef);

// console.log(2);