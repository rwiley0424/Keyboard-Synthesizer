// OOP Intro
// make a car object:
const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1999,
    odometer: 123456,
    onRoad: true,
    convertible: false,
    engine: {cyl: 8, ltr: 4.6, hp: 260},
    options: ['spoiler', 'mag wheels', 'moon roof']
}

console.log('car:', car);
console.log(`Jane drives a ${car.year} ${car.make} ${car.model}.`);


// a constructor function returns an object
// so, these functions are for making objects
// inputs are the values of the various keys
// inside function, keys are assigned to function
// call the function, passing in values for each key
// set the call equal to a variable, this stores the
// returned object
// "new" goes in front of func name when calling it
// new ConstrFunc is the "constructor method"
// rather than use a verb for func name as we usually
// do, use noun(s), since it returns a thing (object)
// function name first word is capitalized 
// return keyword not required inside function
function Car(make, modl, year, odom, onRd) {
    this.make = make,
    this.model = modl,
    this.year = year,
    this.odometer = odom,
    this.onRoad = onRd,
    this.listForSale = () => `For Sale: ${this.year} ${this.make} ${this.model}. Only ${this.odometer} miles`;
};

const auto = new Car("Honda", "Civic", 2008, 148787, false);
console.log('auto:', auto);
console.log(`My auto is a ${auto.year} ${auto.make} ${auto.model}.`);
// call the listForSale() method on the object, saving the return value to listing variable:
let listing = auto.listForSale();
console.log('for sale listing:\n', listing);


// constructor can be used to "mass-produce" as many cars as you want
// like a Car object assembly line:
const ride = new Car("Ford", "Thunderbird", 1957, 232322, true);
console.log('ride:', ride);
console.log(`My ride is a ${ride.year} ${ride.make} ${ride.model}.`);
listing = ride.listForSale();
console.log('for sale listing:\n', listing);


// constructor function can take form of a function expression,
// that is, a variable set equal to a function.. 
// however, you cannot use => .. must use function keyword:

const Kar = function(make, modl, year, odom, onRd) {
    this.make = make,
    this.model = modl,
    this.year = year,
    this.odometer = odom,
    this.onRoad = onRd,
    this.listForSale = () => `For Sale: ${this.year} ${this.make} ${this.model}. Only ${this.odometer} miles`;
};

const kar = new Kar("Ford", "Falcon", 1961, 154532, true);

console.log('kar:', kar);
console.log(`My kar is a ${kar.year} ${kar.make} ${kar.model}.`);
listing = kar.listForSale();
console.log('kar for sale listing:\n', listing);


// methods: an object key with a function for its value
// refactor the objects so that each has a listForSale method

// Class construction
// methods of the Class are declared below the constructor function -- not inside
// no this in front of the function/method name.
class ClassyCar {
    constructor(make, modl, year, odom, onRd) {
        this.make = make,
        this.model = modl,
        this.year = year,
        this.odometer = odom,
        this.onRoad = onRd
    }
    listForSale = () => `For Sale: ${this.year} ${this.make} ${this.model}. Only ${this.odometer} miles`;
};

const classyCar = new ClassyCar("Toyota", "Corolla", 2015, 78787, true);

console.log('classyCar:', classyCar);
console.log(`My classy car is a ${classyCar.year} ${classyCar.make} ${classyCar.model}.`);
listing = classyCar.listForSale();
console.log('classy car for sale listing:\n', listing);