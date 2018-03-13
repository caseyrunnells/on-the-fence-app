var nameVar = 'Casey';
var nameVar ='Joe';
console.log('nameVar', nameVar);

let nameLet = 'Jeff';
nameLet = 'Tony';
console.log('nameLet', nameLet);

const nameConst = 'Mikey';
console.log('NameConst', nameConst);

// Block scoping

const fullName = 'Casey Runnells';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);