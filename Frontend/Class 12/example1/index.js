// const obj= {};
// const usernameRef = document.querySelector('.form input.username');
// usernameRef.addEventListener('keyup', function(e) {
//     obj['username'] = e.target.value;
//     // const previewRef = document.querySelector('.preview');
//     // previewRef.innerText = e.target.value;
// });

// const passwordRef = document.querySelector('.form input.password');
// passwordRef.addEventListener('keyup', function(e) {
//     obj['password'] = e.target.value;
// });

// const buttonRef = document.querySelector('.form button');
// buttonRef.addEventListener('click', function(e) {
//     console.log(obj);
// });


const formRef = document.querySelector('.form');
formRef.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(formRef.elements[0].name, formRef.elements[0].value);
    const result = [...formRef.elements].reduce(function(acc, item) {
        if (item.name) {
            acc[item.name] = item.value;
        }
        return acc;
    }, {});
    console.log(result);
});