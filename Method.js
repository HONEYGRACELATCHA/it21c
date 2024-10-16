//Input
const person1 = {
    name: "Honey Gace",
    age: 19,
    hobbies: "Reading & Singing",
}
//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Hobbies: " + person1.hobbies);
console.log("--------------------------------");
// Class definition
class Person {
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Hobbies: " + this.hobbies);
    }
    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Hobbies:</strong> ${this.hobbies}
        `;
    }
}
// Creating an object (instance) of the Person class
const personOne = new Person('Honey Grace', 19, 'Reading & Singing');

// Calling methods
personOne.displayInfo();
