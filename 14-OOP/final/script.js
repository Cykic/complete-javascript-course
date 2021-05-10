'use strict';
const b = 'a boy';
class Person {
    #pin
    constructor(firstName, birthYear, pin) {
        this.firstName = firstName;
        this.birthYear = birthYear;
        this.#pin = pin
        console.log(this);
        console.log(`Welcome ${this.firstName}`);
    }
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    get pin(){
        return this.#pin
    }
}

const bolaji = new Person('Bolaji', 1999, 2222);
const arr = [3, 4, 5, 5];
console.log(arr.__proto__);
console.log(Array);

const h1 = document
