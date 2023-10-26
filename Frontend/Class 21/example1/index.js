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

const BMW = new Car('X1', 'Red');
const Mer = new Car('A1', 'Black');

// Class based approach

class Car1 {
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
}

const BMW1 = new Car1('X1', 'Red');
const Mer1 = new Car1('A1', 'Black');