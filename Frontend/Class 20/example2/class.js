// let person = {
//     name: 'Akhil',
//     course: 'Fullstack',
//     getName: function() {
//         return this.name;
//     },
//     getCourse: function() {
//         return this.course;
//     }
// }
// console.log(person.name); //
// console.log(person.getName()); //


// let person2 = {
//     name: 'Krishna',
//     course: 'Fullstack',
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(person2.name); //
// console.log(person2.getName()); //



// function Person(name, course) {
//     this.name = name;
//     this.course = course;
//     this.getName = function() {
//         return this.name;
//     }

//     this.getCourse = function() {
//         return this.course;
//     }
// }

// const Mohsin = new Person('Mohsin', 'Fullstack');
// const Swati = new Person('Swati', 'Fullstack');
// console.log(Mohsin.getName());
// console.log(Swati.getName());




function Car(name, color) {
    this.name = name;
    this.color = color;
    this.getName = function() {
        return this.name;
    }
}

const BMW = new Car('BMW', 'Red');
console.log(BMW);
console.log(global.color);




