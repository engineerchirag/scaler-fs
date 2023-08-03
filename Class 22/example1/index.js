// class (ES2015) X > ES6

// function Car(model, make) {
//     this.model = model;
//     this.make = make;
//     this.getDetail = function() {
//         return `Car model is ${this.model}`;
//     }
// }

// const BMW = new Car('A1', '2023');
// const AUDI = new Car('X1', '2022');

// ES6

class Car{
    constructor(model, make) {
        this.model = model;
        this.make = make;
        this.getDetail = function() {
            return `Car model is ${this.model}`;
        }
        this.getMake = function() {
            return `Make from Car class ${this.make}`
        }
        this.logData = function(a, b) {
            console.log(a, b);
        }
    }
}

const BMW = new Car('A1', '2023');
const AUDI = new Car('X1', '2022');

class SuperCar extends Car{
    constructor(price, model, make) {
        super(model, make);
        this.price = price;
        this.totalPrice = function(tax) {
            return tax + this.price;
        }
        this.getMake = function() {
            return `Make from SuperCar class ${this.make}`
        }
        this.logData = function(a) {
            console.log(a);
        }
    }

    getDetail() {
        return `Price of model ${this.model} is  ${this.price}`;
    }

    getModel() {
        return `Model is ${this.model}`
    }

    static showAlert() {
        console.log('Alert');
    }
}

const LuxuryBMW = new SuperCar(2000000, 'A1', '2023');
const LuxuryAUDI = new SuperCar(1000000, 'X1', '2022');

// SuperCar.showAlert()






