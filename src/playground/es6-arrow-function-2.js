// argument object - no longer bound with arrow functions 

const add = (a, b) => {
    //console.log(arguments)
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound 

const user = {
    name: 'Casey',
    cities: ['Denver', 'Dallas', 'Austin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers 
    // multiplyBy - single number
    // multiply - return a new array where the nubmers have been multiplied
    numbers: [3, 7, 13],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());