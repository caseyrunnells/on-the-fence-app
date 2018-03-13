class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
       return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
       return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description += ` Their Major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, major, location) {
        super(name, age, location);
        this.location = location;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting = greeting += ` I'm visiting from ${this.location}`;
        }

        return greeting;
    }
}



const me  = new Traveler('Casey Runnells',28, 'Political Science', 'Austin');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());