const teacher = {
    firstName: 'Chirag',
    lastName: 'Goel',
    age: 30,
    getFullName: function(prefix) {
        return `${prefix} ${this.firstName} ${this.lastName}`
    }
}

const student = {
    firstName: 'Prabir',
    lastName: 'Kumar',
}

const gf = {
    firstName: 'Rakhi',
    lastName: 'Gupta',
}

// console.log(teacher.getFullName());

const getName = teacher.getFullName;
// console.log(getName());
// console.log(getName.call(student, 'Mr.'));
// console.log(getName.apply(student, ['Mr.']));


const newGetName = getName.bind(gf);


console.log(newGetName('Ms.'));
console.log(newGetName('Mrs.'));





