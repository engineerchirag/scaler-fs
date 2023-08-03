// Constructor function
function Car(model, color) {
    this.model = model;
    this.color = color;
    this.getColor = function() {
        return this.color;
    }
}

Car.prototype.getModel = function() {
    return this.model;
}

Car.prototype.getDetails = function() {
    console.log('Detail Function');
}

// const BMW = new Car('X1', 'Red');
// const Mer = new Car('A1', 'Black');

function SuperCar(price, features, model, color) {
    Car.call(this);
    this.price = price;
    this.features = features;
}

SuperCar.prototype = Object.create(Car.prototype);

SuperCar.prototype.getOnRoadPrice = function() {
    return this.price + 100000;
}

const BMW2 = new SuperCar(10000, ['F21'], 'X1', 'Red');
const Mer2 = new SuperCar(20000, ['F2'], 'A2', 'Blue');