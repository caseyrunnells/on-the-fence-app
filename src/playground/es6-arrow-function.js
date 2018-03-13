//function square(x) {
// return x * x;
//};

//console.log(square(3));

//const squareArrow = (x)  => {
//    return x * x;
//};

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstname('Mike Smith') -> "Mike"
// Create regular arrow function 
// Create arrow function using shorthand syntax

//Arrow function regular

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

//Arrow function shorthand

const getFirstNameShorthand = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShorthand('Sam Smith'));