class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
        this.getColor = function() {
            return this.color;
        }
    }

    getModel() {
        return this.model;
    }

    getDetails() {
        console.log('Detail Function');
    }

    static getArea(radius) {
        return 3.14 * radius * radius;
    }
 }

// const BMW1 = new Car('X1', 'Red');
// const Mer1 = new Car('A1', 'Black');
// console.log(Car.getArea(10));


class SuperCar extends Car{
    constructor(price, features, model, color) {
        super(model, color);
        this.price = price;
        this.features = features;
        this.hasOwnProperty = function() {
            return 'Mujhe kya pata';
        }
    } 
    
    getOnRoadPrice() {
        return this.price + 100000;
    }

    
}

const BMW2 = new SuperCar(2000000, ['F1', 'F2', 'F3'], 'X1', 'Black');
const MER2 = new SuperCar(1000000, ['F3', 'F4', 'F5'], 'A1', 'Blue');